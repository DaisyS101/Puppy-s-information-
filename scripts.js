function filterPets(type, event) {
  const cards = document.querySelectorAll('.pet-card');
  const buttons = document.querySelectorAll('.filter-btn');

  if (event) {
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }

  cards.forEach(card => {
    if (type === 'all' || card.dataset.type === type) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
