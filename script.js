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