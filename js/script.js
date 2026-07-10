// ===============================
// Mobile Menu Toggle
// ===============================
const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// ===============================
// Smooth Scrolling
// ===============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ===============================
// Contact Form Validation
// ===============================
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let valid = true;

    if (name && name.value.trim() === "") {
      alert("Please enter your name.");
      valid = false;
    }

    if (email) {
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (!email.value.match(emailPattern)) {
        alert("Please enter a valid email.");
        valid = false;
      }
    }

    if (message && message.value.trim() === "") {
      alert("Please enter your message.");
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
    } else {
      alert("Message submitted successfully!");
    }
  });
}

// ===============================
// Active Navigation Link
// ===============================
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");

  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    link.classList.add("active");
  }
});

// ===============================
// Back To Top Button
// ===============================
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "90px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.fontSize = "20px";
topBtn.style.display = "none";
topBtn.style.cursor = "pointer";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#254362";
topBtn.style.color = "#fff";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ===============================
// Simple Fade Animation
// ===============================
const elements = document.querySelectorAll(".card, .service, .team-member");

window.addEventListener("scroll", () => {
  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "0.6s ease";
    }
  });
});
const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.innerHTML = "☀️";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeBtn.innerHTML = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeBtn.innerHTML = "🌙";
    }
  });
}
const chatIcon = document.getElementById("chat-icon");
const chatBox = document.getElementById("chat-box");

chatIcon.onclick = () => {
  chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
};

document.getElementById("send-btn").onclick = function () {
  let input = document.getElementById("user-input");

  let msg = input.value.trim();

  if (msg === "") return;

  let body = document.getElementById("chat-body");

  body.innerHTML += `<p><strong>You:</strong> ${msg}</p>`;

  let reply = "Please contact us through our Contact page.";

  msg = msg.toLowerCase();

  if (msg.includes("service"))
    reply = "We provide Web Development, UI/UX and Digital Solutions.";

  if (msg.includes("price")) reply = "Please visit our Pricing section.";

  if (msg.includes("contact")) reply = "Email: info@technova.com";

  if (msg.includes("hello")) reply = "Hello 👋 Welcome to TechNova.";

  body.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;

  input.value = "";

  body.scrollTop = body.scrollHeight;
};
const toast = document.getElementById("toast");

window.onload = function () {
  setTimeout(() => {
    toast.style.display = "block";
  }, 1500);

  setTimeout(() => {
    toast.style.display = "none";
  }, 5500);
};