const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer_year');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

const handleCurrentYear = () =>
	(footerYear.innerText = new Date().getFullYear());

navBtn.addEventListener('click', handleNav);
handleCurrentYear();
