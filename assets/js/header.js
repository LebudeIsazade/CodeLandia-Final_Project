document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navbar = document.getElementById('navbar');
  
    burgerMenu.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  });
  
  