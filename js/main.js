const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer_year');
const allNavItems = document.querySelectorAll('.nav__link');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	if (navMobile.classList.contains('nav-mobile--active')) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
};

const handleCurrentYear = () =>
	(footerYear.innerText = new Date().getFullYear());

navBtn.addEventListener('click', handleNav);
navMobile.addEventListener('click', (event) => {
	if (event.target.classList.contains('nav__link')) {
		handleNav();
	}
});
handleCurrentYear();
