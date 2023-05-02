import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
// import main from './view/main';
import App from './view/app';

// document.addEventListener('DOMContentLoaded', main);

// console.log('Hello coders');

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
