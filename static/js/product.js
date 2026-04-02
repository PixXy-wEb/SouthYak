const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });

    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    document.querySelectorAll(".faq-item").forEach(item => {
      const btn = item.querySelector(".faq-question");
      btn.addEventListener("click", () => {
        item.classList.toggle("open");
      });
    });