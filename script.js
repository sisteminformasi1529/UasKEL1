document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------------------------------------
  // Fitur 1: Mobile Navigation Menu Toggle
  // -------------------------------------------------------------
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Tutup menu saat link diklik pada layar HP
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  // -------------------------------------------------------------
  // Fitur 2: Dark Mode Toggle
  // -------------------------------------------------------------
  const themeToggleBtn = document.getElementById("themeToggle");
  
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    
    themeToggleBtn.textContent = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
  });

  // -------------------------------------------------------------
  // Fitur 3: Tombol Show / Hide (Tampil atau Sembunyikan Konten)
  // -------------------------------------------------------------
  const toggleButtons = document.querySelectorAll(".btn-toggle-text");

  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const moreInfo = button.nextElementSibling;
      moreInfo.classList.toggle("hidden");

      if (moreInfo.classList.contains("hidden")) {
        button.textContent = "Baca Selengkapnya";
      } else {
        button.textContent = "Sembunyikan";
      }
    });
  });

  // -------------------------------------------------------------
  // Fitur 4: Character Counter pada Textarea Form
  // -------------------------------------------------------------
  const pesanInput = document.getElementById("pesan");
  const charCount = document.getElementById("charCount");

  pesanInput.addEventListener("input", () => {
    const currentLength = pesanInput.value.length;
    charCount.textContent = currentLength;
  });

  // -------------------------------------------------------------
  // Fitur 5: Validasi Form & Pesan Konfirmasi (DOM Manipulation)
  // -------------------------------------------------------------
  const contactForm = document.getElementById("contactForm");
  const confirmationMsg = document.getElementById("confirmationMessage");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Validasi HTML5 kustom sederhana
    if (contactForm.checkValidity()) {
      contactForm.reset();
      charCount.textContent = "0"; // Reset counter
      confirmationMsg.classList.remove("hidden");

      // Sembunyikan pesan setelah 5 detik
      setTimeout(() => {
        confirmationMsg.classList.add("hidden");
      }, 5000);
    } else {
      contactForm.reportValidity();
    }
  });

  // -------------------------------------------------------------
  // Fitur 6: Tombol Kembali Ke Atas (Back To Top)
  // -------------------------------------------------------------
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});