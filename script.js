// تفعيل قائمة الهاتف
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.add("active");
  document.querySelector(".overlay").classList.add("active");
  document.body.style.overflow = "hidden";
});

document.querySelector(".close-menu").addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.remove("active");
  document.querySelector(".overlay").classList.remove("active");
  document.body.style.overflow = "auto";
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.remove("active");
  document.querySelector(".overlay").classList.remove("active");
  document.body.style.overflow = "auto";
});
