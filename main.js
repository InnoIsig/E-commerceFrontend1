let search = document.querySelector('.search-box');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
  navbar.classList.remove('active');
}

document.querySelector('#menu-icon').onclick = () => {
  navbar.classList.toggle('active');
  search.classList.remove('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
  search.classList.remove('active');
}

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});



document.addEventListener('DOMContentLoaded', function () {
const categoryButtons = document.querySelectorAll('.category-btn');
const products = document.querySelectorAll('.products-container .box');

categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
        button.classList.add('active');

            // Get category to filter
        const category = button.getAttribute('data-category');

            // Show/Hide products based on category
        products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
                product.style.display = 'block';
        } else {
                product.style.display = 'none';
        }
        });
        });
});
});

