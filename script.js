let listLinks = document.querySelectorAll(".link-item a");
for (let i = 0; i < listLinks.length; i++) {
	listLinks[i].addEventListener("click", () => {

		let activeLink = listLinks[i].closest('.links-list').querySelector('a.active')

		if (activeLink) {
			activeLink.classList.remove('active');
		}

		listLinks[i].classList.add("active");

	})
}

let listLinks2 = document.querySelectorAll(".menu-links a");
console.log(listLinks2)
for (let i = 0; i < listLinks2.length; i++) {
	listLinks2[i].addEventListener("click", () => {

		let activeLink = listLinks2[i].closest('.links').querySelector('a.active')

		if (activeLink) {
			activeLink.classList.remove('active');
		}

		listLinks2[i].classList.add("active");

	})
}

let burger = document.querySelector('.burger');
let burgerContent = document.querySelector('.header__menu');
let closer = document.querySelector('.closer');
let links = document.querySelector('.links');
burger.addEventListener('click', () => {
	burgerContent.classList.add('active');
	links.classList.add('active');
	closer.classList.add('active');
});

closer.addEventListener('click', () => {
	burgerContent.classList.remove('active');
	links.classList.remove('active');
	closer.classList.remove('active');
});

