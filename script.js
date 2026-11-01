
const button = document.querySelector("#hello-btn");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
  message.textContent = "ยินดีต้อนรับสู่โลกของการเขียนโค้ด!";
});
