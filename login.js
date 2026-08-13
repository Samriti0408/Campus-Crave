// ===============================
// Campus Crave Login & Signup
// Using Local Storage
// ===============================

// ---------- SIGN UP ----------

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const user = {
            name,
            email,
            phone,
            password
        };

        localStorage.setItem("campusCraveUser", JSON.stringify(user));

        alert("🎉 Account Created Successfully!");

        window.location.href = "login.html";

    });

}

// ---------- LOGIN ----------

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const user = JSON.parse(localStorage.getItem("campusCraveUser"));

        if (!user) {

            alert("No account found. Please Sign Up first.");

            return;

        }

        if (email === user.email && password === user.password) {

            alert("✅ Login Successful!\nWelcome to Campus Crave.");

            localStorage.setItem("isLoggedIn", "true");

            window.location.href = "index.html";

        } else {

            alert("❌ Invalid Email or Password");

        }

    });

}

// ---------- LOGOUT ----------

function logout() {

    localStorage.removeItem("isLoggedIn");

    alert("Logged Out Successfully!");

    window.location.href = "login.html";

}