
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.elements["name"].value.trim();
    const message = document.getElementById("formMessage");

    message.textContent =
      `Thank you, ${name}! Your form is ready.`;

    contactForm.reset();
  });
}
