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
        if(entry.isIntersecting){
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    document.getElementById("contactForm").addEventListener("submit", function(e){
      e.preventDefault();
      alert("Message sent! We'll get back to you soon.");
      this.reset();
    });

    document.getElementById("newsletterForm").addEventListener("submit", function(e){
      e.preventDefault();
      alert("Subscribed successfully!");
      this.reset();
    });