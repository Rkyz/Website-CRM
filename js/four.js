const toggleBtn = document.querySelector('.second-toggle');
const headerShow = document.querySelector('.second-navigation ul');

toggleBtn.addEventListener('click', function() {
  headerShow.classList.toggle('active');
});
