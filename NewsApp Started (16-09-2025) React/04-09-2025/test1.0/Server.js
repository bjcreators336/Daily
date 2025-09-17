
const express = require("express");
const path = require("path");
const session = require("express-session");
const bcrypt = require("bcryptjs"); // Added for password hashing
const mongoose = require("mongoose");
const port = process.env.PORT || 5550;

const app = express();

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Use express's built-in parser
mongoose
  .connect("mongodb://localhost:27017/register") // Replace with your MongoDB connection string
  .then(() => {
    console.log("connected to mongoDb");
  })
  .catch((err) => {
    console.log(`Failed to connect due to error:${err}`);
  });
const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);
app.use(
  session({
    secret: "My Secret",
    resave: false,
    saveUninitialized: true,
  })
);

// Serve index.html for /register
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle user registration
app.post("/register", async (req, res) => {
  const { userId, name, email, password } = req.body;
  if (!userId || !name || !email || !password) {
    return res.status(400).send("All fields are required.");
  }

  try {
    // Check if user already exists to provide a clear error
    const existingUser = await User.findOne({ $or: [{ email }, { userId }] });
    if (existingUser) {
      return res.status(409).send("User with this email or userId already exists.");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password || '', 10);

    const newUser = new User({
      userId,
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).send("User Registered Successfully");
  } catch (error) {
    console.log(`Error during registration:`, error);
    // Check for duplicate key error (code 11000) from MongoDB
    if (error.code === 11000) {
      return res.status(409).send("A user with that userId or email already exists.");
    }
    res.status(500).send("Internal Server Error");
  }
});

// Handle user login
app.post("/login", async (req, res) => {
  const { userId, password } = req.body;
  if (!userId || !password) {
    return res.status(400).send("UserId and password are required.");
  }

  try {
    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(404).send("User not found.");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials.");
    }

    res.status(200).send("Login Successful!");
  } catch (error) {
    console.log(`Error During Login: ${error}`);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`server is listning on http://localhost:${port}`);
});
