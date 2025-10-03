window.onload = function() {
  // Fade in About and Projects sections with delay
  setTimeout(() => {
    document.querySelector('.about').style.opacity = '1';
    document.querySelector('.projects').style.opacity = '1';
  }, 450);

  // Add highlight animation on project cards when clicked
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('highlight');
    });
  });
};

// Extra animation style for highlight
const style = document.createElement('style');
style.innerHTML = `
.project-card.highlight {
    border: 2px solid #f5576c;
    box-shadow: 0 0 20px #f5576c88;
    background: linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%);
}
`;
document.head.appendChild(style);
