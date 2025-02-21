document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
      // Fade out the welcome screen
      document.getElementById("welcome-screen").style.opacity = "0";
      
      // Wait for fade-out effect, then remove it and show main content
      setTimeout(() => {
          document.getElementById("welcome-screen").style.display = "none";
          document.getElementById("main-content").classList.remove("hidden");
      }, 1000);
  }, 1000); // Welcome screen duration (2 seconds)
});

  
  
  // Initial Animation
  gsap.to(".hero-container", { opacity: 1, y: -20, duration: 0.1, ease: "power3.out" });
      
  document.querySelectorAll(".bg-layer").forEach((layer) => {
  layer.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth - 1) * 100;
  let y = (e.clientY / window.innerHeight - 1.5) * 100;

  // Move only the hovered image smoothly
  gsap.to(layer, { x: x * 0.3, y: y * 0.3, duration: 0.5 });

  // Dim all other images & entire section
  document.querySelectorAll(".bg-layer").forEach((otherLayer) => {
      if (otherLayer !== layer) {
          gsap.to(otherLayer, { opacity: 0.3, duration: 0.1 });
      }
  });

  // Make hero section semi-transparent
  gsap.to(".hero-container", { opacity: 0.2, duration: 0.1 });
});

layer.addEventListener("mouseleave", () => {
  // Reset opacity and position when mouse leaves
  gsap.to(layer, { x: 0, y: 0, duration: 0.5 });
  document.querySelectorAll(".bg-layer").forEach((otherLayer) => {
      gsap.to(otherLayer, { opacity: 1, duration: 0.1 });
  });

  // Restore full opacity for the hero section
  gsap.to(".hero-container", { opacity: 1, duration: 0.1 });
});
});
