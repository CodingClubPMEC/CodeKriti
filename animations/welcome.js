document.addEventListener("DOMContentLoaded",()=>{anime({
  targets: '#path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: 1000,
  direction: 'alternate',
  loop: true
});});