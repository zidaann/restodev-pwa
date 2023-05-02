import card from '../component/card';

const baseUrl = require('../../DATA.json');

const main = () => {
  const posts = document.getElementById('posts');
  const btnMode = document.querySelectorAll('.btn-mode');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navbar = document.querySelector('.nav');
  const footer = document.querySelector('.footer');
  const dropdown = document.querySelector('.dropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  document.querySelectorAll('.nav-link')
    .forEach((n) => n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }));

  dropdown.addEventListener('click', () => {
    if (dropdownMenu.style.display === 'none') {
      dropdownMenu.style.display = 'block';
    } else {
      dropdownMenu.style.display = 'none';
    }
  });
  const setDarkMode = (isDark) => {
    if (isDark === 'true') {
      document.body.classList.add('darkmode');
      navbar.classList.add('darkmode');
      footer.classList.add('darkmode');
      navMenu.classList.add('darkmode');
    } else {
      document.body.classList.remove('darkmode');
      navbar.classList.remove('darkmode');
      footer.classList.remove('darkmode');
      navMenu.classList.remove('darkmode');
    }
  };

  const displayRestaurant = () => {
    const item = baseUrl.restaurants.map((data) => card(data)).join('');
    posts.innerHTML = item;
  };

  btnMode.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      setDarkMode(e.target.value);
    });
  });

  displayRestaurant();
};

export default main;
