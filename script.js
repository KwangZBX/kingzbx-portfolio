
const button = document.querySelector("#hello-btn");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
  message.textContent = "ยินดีต้อนรับสู่โลกของการเขียนโค้ด!";
});

// Initialize EmailJS
emailjs.init({
  publicKey: "roBN9gK25t42ajZpc",
});

// Contact Form
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm(
    "service_bhmwj85",
    "template_eah5s3r",
    this
  ).then(
    function () {
      alert("Message sent successfully!");
      contactForm.reset();
    },
    function (error) {
      alert("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    }
  );
});
