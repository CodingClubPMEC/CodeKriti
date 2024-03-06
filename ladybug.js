// script.js
document.addEventListener("DOMContentLoaded", function() {
  const bug = document.getElementById("bug");
  const codeEditor = document.getElementById("code-editor");

  function moveBug() {
    const maxX = codeEditor.offsetWidth;
    const maxY = codeEditor.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    anime({
      targets: bug,
      translateX: randomX,
      translateY: randomY,
      duration: 2000,
      easing: 'linear'
    });
  }
  setInterval(moveBug, 3000);
});

