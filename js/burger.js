
// burger
document.getElementById('burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
  
    if (this.classList.contains('active')) {
      // Заблокировать скролл при открытом бургере
      document.body.style.overflow = 'hidden';
    } else {
      // Разблокировать скролл при закрытом бургере
      document.body.style.overflow = '';
    }
  });
  