// script.js
document.addEventListener("DOMContentLoaded", function() {
  const bug = document.getElementById("bug");
  const codeEditor = document.getElementById("code-editor");

  // Function to move the bug randomly within the code editor
  function moveBug() {
    const editorRect = codeEditor.getBoundingClientRect();
    const maxX = editorRect.width - bug.offsetWidth;
    const maxY = editorRect.height - bug.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Use Anime.js for smooth animation
    anime({
      targets: bug,
      translateX: randomX,
      translateY: randomY,
      duration: 2000, // Duration of the animation in milliseconds
      easing: 'linear' // Linear easing for smoother movement
    });
  }

  // Trigger bug movement on user interaction or at regular intervals
  setInterval(moveBug, 3000); // Move bug every 3 seconds
});

