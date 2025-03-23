
  const roles = ["Web Developer", "Cybersecurity Researcher", "Penetration Tester","Freelancer"];
  const typingText = document.getElementById("typing-text");
  
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentRole = roles[currentIndex];

    if (isDeleting) {
      typingText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);  // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % roles.length;  // Move to the next role
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, isDeleting ? 100 : 150);  // Speed of typing and deleting
    }
  }

  document.addEventListener("DOMContentLoaded", typeEffect);


  // const light = document.querySelector(".light");

  //   document.addEventListener("mousemove", (e) => {
  //       light.style.left = `${e.clientX}px`;
  //       light.style.top = `${e.clientY}px`;
  //   });







// GSAP Animations
window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Animate the image
  tl.from(".image img", {
      duration: 1.5,
      opacity: 0,
      x: 100
  });

  // Animate the text content
  tl.from(".content h1", { 
      duration: 1, 
      opacity: 0, 
      y: -50 
  }, "-=1");

  tl.from(".content h2", { 
      duration: 1, 
      opacity: 0, 
      x: -100 
  }, "-=0.5");

  tl.from(".content h3", { 
      duration: 1, 
      opacity: 0, 
      scale: 0.8 
  }, "-=0.5");

  tl.from(".content p", {
      duration: 1, 
      opacity: 0, 
      y: 20 
  }, "-=0.5");

  // Animate buttons and icons with stagger
  tl.from(".btn", { 
      duration: 0.8, 
      opacity: 1, 
      scale: 0.9 
  }, "-=0.3");

  tl.from(".social-icons a", {
      duration: 0.8,
      opacity: 0,
      y: 20,
      stagger: 0.2
  }, "-=0.5");
});


// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
    // Image animation
    gsap.from(".about-img img", {
        scrollTrigger: {
            trigger: ".about-img img",
            start: "top 80%",    // Animation starts when the top of the image reaches 80% of the viewport
            end: "top 30%",
            scrub: true,         // Smooth animation on scroll
        },
        duration: 1.5,
        opacity: 0,
        x: -100,
        ease: "power3.out"
    });

    // Content animation
    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: ".about-content",
            start: "top 90%",
            end: "top 40%",
            scrub: true
        },
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power3.out"
    });

    // Button animation with stagger
    gsap.from(".btn", {
        scrollTrigger: {
            trigger: ".btn",
            start: "top 95%",
            end: "top 70%",
            scrub: true
        },
        opacity: 0,
        scale: 0.8,
        duration: 1.2
    });
});
