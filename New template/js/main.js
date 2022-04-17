let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
	navbar.classList.toggle('active');
	menu.classList.toggle('move');
	cart.classList.remove('active');
	location.href = "cart.html";
	bell.classList.remove('active');
};

// Notifications
let cart = document.querySelector('.notification');

document.querySelector('#cart-icon').onclick = () => {
	cart.classList.toggle('active');
};

// cart items added
// let cart = document.querySelector('.menu');

// document.querySelector('#cart-icon').onclick = () =>{
// 	cart.classList.toggle('active');
// };

// Swiper
let swiper = new Swiper('.trending-content', {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		1068: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
});

// Custom Scroll Bar
window.onscroll = function () {
	myfunction();
};

function myfunction() {
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	let scrolled = (winScroll / height) * 100;
	document.getElementById('scroll-bar').style.width = scrolled + '%';
}
