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