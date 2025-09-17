// تفعيل القائمة على الهواتف
document.querySelector(".nav-toggle").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("active");
});

// عد تنازلي للعروض (مثال بسيط)
function updateCountdown() {
  // يمكن تطوير هذا الجزء ليعمل بعد تنازلي حقيقي
  const seconds = document.querySelector(
    ".countdown-item:last-child .countdown-number"
  );
  let value = parseInt(seconds.textContent);
  value = value === 0 ? 59 : value - 1;
  seconds.textContent = value < 10 ? "0" + value : value;
}

setInterval(updateCountdown, 1000);
