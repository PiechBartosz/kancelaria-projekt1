// navigation action on mobile

const burgerBtn = document.querySelector(".burger-menu");
const navMobile = document.querySelector(".navigation-mobile");
const allMobileItems = document.querySelectorAll(".navigation-mobile__item");

const mobileNavigationDelay = () => {
	let delayItem = 0;
	allMobileItems.forEach((item) => {
		item.classList.toggle("navItemsAnimation");
		item.style.animationDelay = delayItem + "s";
		delayItem += 1;
	});
};

const mobileActive = () => {
	navMobile.classList.toggle("navigation-mobile-active");
	mobileNavigationDelay();
};

burgerBtn.addEventListener("click", mobileActive);

// end navigation action on mobile
