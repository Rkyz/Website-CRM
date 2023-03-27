const toggleBtn = document.querySelector('.toggle-three');
const headerShow = document.querySelector('.header-show');

toggleBtn.addEventListener('click', function() {
  headerShow.classList.toggle('active');
});
