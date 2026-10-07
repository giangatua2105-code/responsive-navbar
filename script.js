/* ==========================================================
   RESPONSIVE NAVBAR - JAVASCRIPT
   Xử lý sự kiện click vào biểu tượng ☰ để mở/đóng menu
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {
  // Lấy các phần tử cần thiết
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  // Xử lý sự kiện click vào icon ☰
  menuIcon.addEventListener("click", function () {
    // Toggle class .active → hiện/ẩn menu
    navLinks.classList.toggle("active");

    // Đổi icon ☰ thành ✕ khi menu mở (tùy chọn, đẹp hơn)
    if (navLinks.classList.contains("active")) {
      menuIcon.textContent = "✕";
    } else {
      menuIcon.textContent = "☰";
    }
  });

  // Đóng menu khi click vào 1 link (tùy chọn)
  const links = document.querySelectorAll(".nav-links a");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
        menuIcon.textContent = "☰";
      }
    });
  });

  // Tự động reset menu khi resize màn hình về desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("active");
      menuIcon.textContent = "☰";
    }
  });
});
