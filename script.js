
// DISPLAY CURRENT YEAR

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const navbarMenu = document.getElementById("navbarMenu");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navbarMenu.classList.contains("show")) {

            const menu = bootstrap.Collapse.getOrCreateInstance(navbarMenu);

            menu.hide();
        }

    });

});


// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("visitorName").value.trim();

    const email = document.getElementById("visitorEmail").value.trim();

    const message = document.getElementById("visitorMessage").value.trim();

    const status = document.getElementById("formStatus");

    if (!name || !email || !message) {

        status.textContent = "Please fill in all the fields.";

        status.style.color = "red";

        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        status.textContent = "Please enter a valid email address.";

        status.style.color = "red";

        return;
    }

    // CHANGE THIS TO YOUR OWN EMAIL ADDRESS
    const recipientEmail = "your-email@example.com";

    if (recipientEmail === "your-email@example.com") {

        status.textContent =
            "Form validated! Add your email address in script.js to receive messages.";

        status.style.color = "#16834a";

        return;
    }

    const subject = encodeURIComponent(
        "Portfolio Contact - " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    const mailLink =
        "mailto:" + recipientEmail +
        "?subject=" + subject +
        "&body=" + body;

    status.textContent = "Opening your email application...";

    window.location.href = mailLink;

});
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const recipient = "YOUR_EMAIL@gmail.com";

    const subject = encodeURIComponent("Portfolio Contact Message");
    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

    window.location.href =
        "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
});

    
