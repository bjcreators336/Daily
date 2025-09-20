const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/MyData")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console(`Connection denied due to error:${err}`);
  });
const userSchema = new mongoose.Schema({
  name: String,
  fatherName: String,
  email: String,
  password: String,
  studentId: String,
  Subject: String,
});
const User = mongoose.model("User", userSchema);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.get("/register", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registration Form</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body {
        font-family: "Inter", sans-serif;
        background-color: #f3f4f6;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 2rem;
      }

      .container {
        max-width: 500px;
        width: 100%;
        background: white;
        padding: 2.5rem;
        border-radius: 1.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }

      .input-group label {
        transition: all 0.3s ease;
        transform-origin: left top;
        pointer-events: none;
        left: 0.75rem;
        top: 0.75rem;
        color: #6b7280;
      }

      .input-group input:focus + label,
      .input-group input:not(:placeholder-shown) + label {
        transform: translateY(-1.5rem) scale(0.85);
        color: #4f46e5;
      }
    </style>
  </head>
  <body class="bg-gray-100">
    <div class="container">
      <h1 class="text-3xl font-bold text-center mb-6 text-gray-800">
        Register
      </h1>
      <p class="text-center text-gray-600 mb-8">Join our platform today!</p>

  <form id="registrationForm" class="space-y-6" method="POST">
        <!-- Role Selection -->
        <div class="role-selection mb-6">
          <label class="block text-gray-700 font-medium mb-2">Are you a:</label>
          <div class="flex space-x-4">
            <button
              type="button"
              id="studentBtn"
              class="flex-1 py-3 px-6 rounded-xl font-semibold border-2 border-transparent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-indigo-50 hover:bg-indigo-100 text-indigo-700"
            >
              Student
            </button>
            <button
              type="button"
              id="teacherBtn"
              class="flex-1 py-3 px-6 rounded-xl font-semibold border-2 border-transparent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-indigo-50 hover:bg-indigo-100 text-indigo-700"
            >
              Teacher
            </button>
          </div>
        </div>

        <!-- Common Fields -->
        <div id="commonFields" class="space-y-6 hidden">
          <div class="relative input-group">
            <input
              type="text"
              id="fullName"
              placeholder=" "
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300"
            />
            <label
              for="fullName"
              class="absolute text-gray-500 bg-white left-4 px-1 -translate-y-1/2 transition-all duration-300"
              >Full Name</label
            >
          </div>
          <div class="relative input-group">
            <input
              type="text"
              id="email"
              placeholder=" "
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300"
            />
            <label
              for="Father Name"
              class="absolute text-gray-500 bg-white left-4 px-1 -translate-y-1/2 transition-all duration-300"
              >Father Name</label
            >
          </div>
          <div class="relative input-group">
            <input
              type="text"
              id="password"
              placeholder=" "
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300"
            />
            <label
              for="Email"
              class="absolute text-gray-500 bg-white left-4 px-1 -translate-y-1/2 transition-all duration-300"
              >Email</label
            >
          </div>
          <div class="relative input-group">
            <input
              type="password"
              id="password"
              placeholder=" "
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300"
            />
            <label
              for="Email"
              class="absolute text-gray-500 bg-white left-4 px-1 -translate-y-1/2 transition-all duration-300"
              >password</label
            >
          </div>
        </div>

        <!-- Student-Specific Fields -->
        <div id="studentFields" class="space-y-6 hidden">
          <div class="relative input-group">
            <input
              type="text"
              id="studentID"
              placeholder=" "
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300"
            />
            <label
              for="studentID"
              class="absolute text-gray-500 bg-white left-4 px-1 -translate-y-1/2 transition-all duration-300"
              >Student ID</label
            >
          </div>
          <div class="relative input-group">
            <input
              type="text"
              id="major"
              placeholder=" "
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300"
            />
            <label
              for="major"
              class="absolute text-gray-500 bg-white left-4 px-1 -translate-y-1/2 transition-all duration-300"
              >Major</label
            >
          </div>
        </div>

        <!-- Teacher-Specific Fields -->
        <div id="teacherFields" class="space-y-6 hidden">
          <div class="relative input-group">
            <input
              type="text"
              id="employeeID"
              placeholder=" "
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300"
            />
            <label
              for="employeeID"
              class="absolute text-gray-500 bg-white left-4 px-1 -translate-y-1/2 transition-all duration-300"
              >Employee ID</label
            >
          </div>
          <div class="relative input-group">
            <input
              type="text"
              id="department"
              placeholder=" "
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300"
            />
            <label
              for="department"
              class="absolute text-gray-500 bg-white left-4 px-1 -translate-y-1/2 transition-all duration-300"
              >Department</label
            >
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>

      <!-- Message box for success/error messages -->
      <div
        id="messageBox"
        class="mt-6 p-4 text-center rounded-xl font-medium hidden"
      ></div>
    </div>

    <script>
      // Get all the necessary DOM elements
      const studentBtn = document.getElementById("studentBtn");
      const teacherBtn = document.getElementById("teacherBtn");
      const commonFields = document.getElementById("commonFields");
      const studentFields = document.getElementById("studentFields");
      const teacherFields = document.getElementById("teacherFields");
      const registrationForm = document.getElementById("registrationForm");
      const messageBox = document.getElementById("messageBox");

      // Store the currently selected role
      let selectedRole = null;

      // Function to set the active button style
      function setActiveButton(button) {
        // Remove active styles from both buttons
        studentBtn.classList.remove(
          "bg-indigo-600",
          "hover:bg-indigo-700",
          "text-white",
          "border-indigo-600"
        );
        teacherBtn.classList.remove(
          "bg-indigo-600",
          "hover:bg-indigo-700",
          "text-white",
          "border-indigo-600"
        );

        // Add active styles to the selected button
        button.classList.add(
          "bg-indigo-600",
          "hover:bg-indigo-700",
          "text-white",
          "border-indigo-600"
        );
      }

      // Function to show a message in the message box
      function showMessage(message, type) {
        messageBox.textContent = message;
        messageBox.classList.remove(
          "hidden",
          "bg-red-100",
          "text-red-700",
          "bg-green-100",
          "text-green-700"
        );
        if (type === "success") {
          messageBox.classList.add("bg-green-100", "text-green-700");
        } else {
          messageBox.classList.add("bg-red-100", "text-red-700");
        }
      }

      // Event listener for the Student button
      studentBtn.addEventListener("click", () => {
        setActiveButton(studentBtn);
        selectedRole = "student";
        commonFields.classList.remove("hidden");
        studentFields.classList.remove("hidden");
        teacherFields.classList.add("hidden");
      });

      // Event listener for the Teacher button
      teacherBtn.addEventListener("click", () => {
        setActiveButton(teacherBtn);
        selectedRole = "teacher";
        commonFields.classList.remove("hidden");
        teacherFields.classList.remove("hidden");
        studentFields.classList.add("hidden");
      });

      // Event listener for form submission
      registrationForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Check if a role has been selected
        if (!selectedRole) {
          showMessage(
            "Please select if you are a Student or a Teacher.",
            "error"
          );
          return;
        }

        // Get common field values
  const fullName = document.getElementById("fullName").value;
  const fatherName = document.getElementById("email").value; // Actually Father Name field
  const email = document.getElementById("password").value; // Actually Email field
  const password = document.getElementById("password").value;

        // Simple validation
        if (!fullName || !email || !password) {
          showMessage("Please fill out all the common fields.", "error");
          return;
        }

        // Prepare data for backend
        let data = {
          name: fullName,
          fatherName: fatherName,
          email: email,
          password: password,
        };
        if (selectedRole === "student") {
          const studentId = document.getElementById("studentID").value;
          const Subject = document.getElementById("major").value;
          if (!studentId || !Subject) {
            showMessage("Please fill out all student-specific fields.", "error");
            return;
          }
          data.studentId = studentId;
          data.Subject = Subject;
        } else if (selectedRole === "teacher") {
          // For teachers, you can map employeeID and department to studentId and Subject for now
          const studentId = document.getElementById("employeeID").value;
          const Subject = document.getElementById("department").value;
          if (!studentId || !Subject) {
            showMessage("Please fill out all teacher-specific fields.", "error");
            return;
          }
          data.studentId = studentId;
          data.Subject = Subject;
        }
        // Send data to backend
        fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(msg => {
          showMessage(msg, 'success');
          registrationForm.reset();
          commonFields.classList.add("hidden");
          studentFields.classList.add("hidden");
          teacherFields.classList.add("hidden");
          studentBtn.classList.remove(
            "bg-indigo-600",
            "hover:bg-indigo-700",
            "text-white",
            "border-indigo-600"
          );
          teacherBtn.classList.remove(
            "bg-indigo-600",
            "hover:bg-indigo-700",
            "text-white",
            "border-indigo-600"
          );
          selectedRole = null;
        })
        .catch(err => {
          showMessage('Registration failed: ' + err, 'error');
        });
      });
    </script>
  </body>
</html>
`);
});
app.post("/register", async (req, res) => {
  const { name, fatherName, email, password, studentId, Subject } = req.body;
  if (!name || !fatherName || !email || !password || !studentId || !Subject) {
    return res
      .status(400)
      .send("All fields are required. Please fill out the form completely.");
  }
  const newUser = new User({
    name,
    fatherName,
    email,
    password,
    studentId,
    Subject,
  });
  try {
    await newUser.save();
    res.status(201).send("User registered successfully.");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Internal server error.");
  }
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
