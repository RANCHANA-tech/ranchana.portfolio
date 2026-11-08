
// DISPLAY CURRENT YEAR
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// CLOSE MOBILE MENU AFTER CLICKING A LINK
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarMenu = document.getElementById("navbarMenu");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        if (navbarMenu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(navbarMenu).hide();
        }
    });
});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("visitorName").value.trim();
    const email = document.getElementById("visitorEmail").value.trim();
    const message = document.getElementById("visitorMessage").value.trim();

    const status = document.getElementById("formStatus");
    const recipient = document.getElementById("contactEmail").textContent.trim();

    if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        return;
    }

    const subject = encodeURIComponent("Portfolio Contact - " + name);

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

    const gmailLink =
        "https://mail.google.com/mail/?view=cm&fs=1&to=" +
        encodeURIComponent(recipient) +
        "&su=" + subject +
        "&body=" + body;

    status.textContent = "Opening Gmail...";
    window.location.href = gmailLink;
});

