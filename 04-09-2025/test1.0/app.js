// Form references
const signInForm = document.getElementById("sign-in-form");
const signUpForm = document.getElementById("sign-up-form");

// Switch links
const showSignUp = document.getElementById("show-sign-up");
const showSignIn = document.getElementById("show-sign-in");

// Switch to Sign Up
showSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  signInForm.classList.remove("active");
  signUpForm.classList.add("active");
});

// Switch to Sign In
showSignIn.addEventListener("click", (e) => {
  e.preventDefault();
  signUpForm.classList.remove("active");
  signInForm.classList.add("active");
});

// Handle Sign In submit
signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userId = document.getElementById("signInUserId").value;
  const email = document.getElementById("signInEmail").value;
  const password = document.getElementById("signInPassword").value;

  const formData = { userId, email, password };

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.text();
    alert(result); // Or handle the response more gracefully
    if (response.ok) {
      signInForm.reset();
    }
  } catch (error) {
    console.error('Error during sign in:', error);
    alert('An error occurred during sign in.');
  }
});

// Handle Sign Up submit
signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userId = document.getElementById("signUpUserId").value;
  const name = document.getElementById("signUpUsername").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;

  const formData = { userId, name, email, password };

  try {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.text();
    alert(result); // Or handle the response more gracefully
    if (response.ok) {
      signUpForm.reset();
    }
  } catch (error) {
    console.error('Error during sign up:', error);
    alert('An error occurred during sign up.');
  }
});
