// Menu
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
	navbar.classList.toggle('active');
	menu.classList.toggle('move');
};

// Routing
let FinalProject_app = angular.module('FinalProject_app', ['ngRoute']);
FinalProject_app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './pages/home.html',
			controller: 'home_ctrl',
		})
		.when('/new-releases', {
			templateUrl: './pages/new.html',
			controller: 'new_ctrl',
		})
		.when('/products', {
			templateUrl: './pages/products.html',
			controller: 'products_ctrl',
		})
		.when('/checkout', {
			templateUrl: './pages/checkout.html',
			controller: 'checkout_ctrl',
		})
		.when('/contact', {
			templateUrl: './pages/contact.html',
			controller: 'contact_ctrl',
		})
		.otherwise({ templateUrl: './pages/404.html' });
});

// --------------- Controllers ------------------

// Home Page
FinalProject_app.controller('home_ctrl', function ($scope) {
	// Swiper
	$scope.swiper = new Swiper('.trending-content', {
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
});

// Products Page
FinalProject_app.controller('products_ctrl', function ($scope) {
	$scope.carts = [];
	$scope.products = [
		{
			p_id: 1,
			p_name: 'Clash Royale',
			p_genre: 'Real Time Strategy (RTS)',
			p_image: 'img/new4.jpg',
			p_price: 59,
		},
		{
			p_id: 2,
			p_name: 'Subway Surfers',
			p_genre: 'Endless Runner',
			p_image: 'img/new1.jpg',
			p_price: 68,
		},
		{
			p_id: 3,
			p_name: 'Fornite',
			p_genre: 'First Person Shooter (FPS)',
			p_image: 'img/new7.png',
			p_price: 42,
		},
		{
			p_id: 4,
			p_name: 'Marvel: Contest of Champions',
			p_genre: 'Fighting',
			p_image: 'img/new8.jpg',
			p_price: 53,
		},
		{
			p_id: 5,
			p_name: 'Call of Duty - Mobile',
			p_genre: 'First Person Shooter (FPS)',
			p_image: 'img/new2.jpg',
			p_price: 62,
		},
		{
			p_id: 6,
			p_name: 'Free Guy',
			p_genre: 'Action',
			p_image: 'img/new3.jpg',
			p_price: 43,
		},
		{
			p_id: 7,
			p_name: 'Minecraft',
			p_genre: 'Open World',
			p_image: 'img/new5.png',
			p_price: 33,
		},
		{
			p_id: 8,
			p_name: 'PUBG',
			p_genre: 'First Person Shooter (FPS)',
			p_image: 'img/new6.png',
			p_price: 34,
		},
	];

	// Shopping Cart
	$scope.add_cart = function (product) {
		if (product) {
			$scope.carts.push({
				p_id: product.p_id,
				p_genre: product.genre,
				p_name: product.p_name,
				p_price: product.p_price,
			});
		}
	};

	$scope.total = 0;

	$scope.setTotals = function (cart) {
		if (cart) {
			$scope.total += cart.p_price;
		}
	};

	$scope.remove_cart = function (cart) {
		if (cart) {
			$scope.carts.splice($scope.carts.indexOf(cart), 1);
			$scope.total -= cart.p_price;
		}
	};
});
