const products = document.querySelector('#js-products');
const showAllButton = document.querySelector('#js-show-all');

showAllButton.addEventListener('click', () => {
  products.scrollIntoView({
    behavior: 'smooth',
  });
});
