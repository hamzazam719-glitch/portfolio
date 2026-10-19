const typingText = document.getElementById("typing-text");

if (typingText) {
  const roles = [
    "AI Engineer",
    "Machine Learning Developer",
    "Computer Vision Enthusiast"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeRole() {
    const currentRole = roles[roleIndex];

    typingText.textContent = currentRole.substring(0, charIndex);

    if (!deleting) {
      charIndex++;

      if (charIndex > currentRole.length) {
        deleting = true;
        setTimeout(typeRole, 1300);
        return;
      }
    } else {
      charIndex--;

      if (charIndex < 0) {
        charIndex = 0;
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(typeRole, deleting ? 45 : 85);
  }

  typeRole();
}