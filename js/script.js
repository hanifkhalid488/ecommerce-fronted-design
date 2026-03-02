// ===============================
// SAFE DOM READY
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  // ===============================
  // COUNTDOWN TIMER (Deals Section)
  // ===============================

  const timerSpans = document.querySelectorAll(".time-box span");

  if (timerSpans.length === 4) {

    let countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 4);

    function updateTimer() {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) return;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timerSpans[0].innerText = days;
      timerSpans[1].innerText = hours;
      timerSpans[2].innerText = minutes;
      timerSpans[3].innerText = seconds;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }


  // ===============================
  // NEWSLETTER VALIDATION
  // ===============================

  const subscribeBtn = document.querySelector(".newsletter button");
  const emailInput = document.querySelector(".newsletter input");

  if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener("click", function () {

      const email = emailInput.value.trim();

      if (email === "") {
        alert("Please enter your email");
      } 
      else if (!email.includes("@")) {
        alert("Please enter valid email");
      } 
      else {
        alert("Subscribed successfully!");
        emailInput.value = "";
      }

    });
  }


  // ===============================
  // SUPPLIER FORM VALIDATION
  // ===============================

  const inquiryBtn = document.querySelector(".supplier-form button");

  if (inquiryBtn) {

    inquiryBtn.addEventListener("click", function () {

      const itemInput = document.querySelector(".supplier-form input[type='text']");
      const detailsInput = document.querySelector(".supplier-form textarea");
      const quantityInput = document.querySelector(".form-row input");

      if (
        itemInput.value.trim() === "" ||
        detailsInput.value.trim() === "" ||
        quantityInput.value.trim() === ""
      ) {
        alert("Please fill all fields");
      } else {
        alert("Inquiry sent successfully!");
      }

    });

  }


  // ===============================
  // CART CLICK ACTION
  // ===============================

  const cartLink = document.querySelector(".header-icons a:last-child");

  if (cartLink) {
    cartLink.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Your cart is currently empty.");
    });
  }

});