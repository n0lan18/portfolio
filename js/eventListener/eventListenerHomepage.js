export function eventListenerHomepage()
{


	let index = 0;

	const carrousel_s1 = document.getElementById("carrousel-s1");
	const carrousel_s2 = document.getElementById("carrousel-s2");
	const carrousel_s3 = document.getElementById("carrousel-s3");
	carrousel_s1.addEventListener('click', (event, index) => {
		if (!carrousel_s1.classList.contains("carrousel-active"))
		{
			index = 2;
			if (carrousel_s1.classList.contains("carrousel-left"))
			{
				carrousel_s2.classList.remove("carrousel-active");
				carrousel_s2.classList.add("carrousel-right");
				carrousel_s3.classList.remove("carrousel-right");
				carrousel_s3.classList.add("carrousel-left");
				carrousel_s1.classList.remove("carrousel-left");
				carrousel_s1.classList.add("carrousel-active");
			}
			else if (carrousel_s1.classList.contains("carrousel-right"))
			{
				carrousel_s3.classList.remove("carrousel-active");
				carrousel_s3.classList.add("carrousel-left");
				carrousel_s2.classList.remove("carrousel-left");
				carrousel_s2.classList.add("carrousel-right");
				carrousel_s1.classList.remove("carrousel-right");
				carrousel_s1.classList.add("carrousel-active");
			}
		}
	})

	carrousel_s2.addEventListener('click', (event, index) => {
		if (!carrousel_s2.classList.contains("carrousel-active"))
		{
			index = 0;
			if (carrousel_s2.classList.contains("carrousel-left"))
			{
				carrousel_s3.classList.remove("carrousel-active");
				carrousel_s3.classList.add("carrousel-right");
				carrousel_s1.classList.remove("carrousel-right");
				carrousel_s1.classList.add("carrousel-left");
				carrousel_s2.classList.remove("carrousel-left");
				carrousel_s2.classList.add("carrousel-active");
			}
			else if (carrousel_s2.classList.contains("carrousel-right"))
			{
				carrousel_s1.classList.remove("carrousel-active");
				carrousel_s1.classList.add("carrousel-left");
				carrousel_s3.classList.remove("carrousel-left");
				carrousel_s3.classList.add("carrousel-right");
				carrousel_s2.classList.remove("carrousel-right");
				carrousel_s2.classList.add("carrousel-active");
			}
		}
	})

	carrousel_s3.addEventListener('click', (event, index) => {
		if (!carrousel_s3.classList.contains("carrousel-active"))
		{
			index = 2;
			if (carrousel_s3.classList.contains("carrousel-left"))
			{
				carrousel_s1.classList.remove("carrousel-active");
				carrousel_s1.classList.add("carrousel-right");
				carrousel_s2.classList.remove("carrousel-right");
				carrousel_s2.classList.add("carrousel-left");
				carrousel_s3.classList.remove("carrousel-left");
				carrousel_s3.classList.add("carrousel-active");
			}
			else if (carrousel_s3.classList.contains("carrousel-right"))
			{
				carrousel_s2.classList.remove("carrousel-active");
				carrousel_s2.classList.add("carrousel-left");
				carrousel_s1.classList.remove("carrousel-left");
				carrousel_s1.classList.add("carrousel-right");
				carrousel_s3.classList.remove("carrousel-right");
				carrousel_s3.classList.add("carrousel-active");
			}
		}
	})

	const buttonCarrousel_s1 = document.getElementById("button-carrousel-s1");
	const buttonCarrousel_s2 = document.getElementById("button-carrousel-s2");
	const buttonCarrousel_s3 = document.getElementById("button-carrousel-s3");

	if (buttonCarrousel_s1)
	{
		buttonCarrousel_s1.addEventListener('click', (event) => {
			window.location.href = "transcendance.html";
		});
	}

	if (buttonCarrousel_s2)
	{
		buttonCarrousel_s2.addEventListener('click', (event) => {
			window.location.href = "so_long.html";
		});
	}

	if (buttonCarrousel_s3)
	{
		buttonCarrousel_s3.addEventListener('click', (event) => {
			window.location.href = "cub3d.html";
		});
	}

	const paginationList = document.getElementById("pagination-list");
	if (paginationList)
	{
		paginationList.addEventListener('click', (event, index) => {
			const clickTarget = event.target;
			if (clickTarget.id === "carrousel-page-1" || clickTarget.id === "carrousel-page-2" || clickTarget.id === "carrousel-page-3")
			{
				const items = paginationList.querySelectorAll('li');
				items.forEach(element => {
					element.classList.remove("carrousel-page-active");
				})
				const screens = document.getElementById("screens");
				const itemsScreens = screens.querySelectorAll("li");
				itemsScreens.forEach(element => {
					element.classList.remove("carrousel-left");
					element.classList.remove("carrousel-right");
					element.classList.remove("carrousel-active");
				})
				if (clickTarget.id === "carrousel-page-1")
				{
					index = 1;
					carrousel_s3.classList.add("carrousel-right");
					carrousel_s1.classList.add("carrousel-left");
					carrousel_s2.classList.add("carrousel-active");
				}
				else if (clickTarget.id === "carrousel-page-2")
				{
					index = 0;
					carrousel_s2.classList.add("carrousel-right");
					carrousel_s3.classList.add("carrousel-left");
					carrousel_s1.classList.add("carrousel-active");
				}
				else if (clickTarget.id === "carrousel-page-3")
				{
					index = 2;
					carrousel_s1.classList.add("carrousel-right");
					carrousel_s2.classList.add("carrousel-left");
					carrousel_s3.classList.add("carrousel-active");				
				}	
				clickTarget.classList.add("carrousel-page-active");
			}
		});
	}

	const screensCarousel = document.getElementById("screens");
	if (screensCarousel)
	{
		const items = screensCarousel.querySelectorAll("li");
		const paginationList = document.getElementById("pagination-list");
		const itemsPages = paginationList.querySelectorAll("li");
		function slideAutomat()
		{
			index++;
			if (index >= itemsPages.length)
				index = 0;
			items.forEach(element => {
				element.classList.remove("carrousel-left");
				element.classList.remove("carrousel-right");
				element.classList.remove("carrousel-active");

			})
			itemsPages.forEach(element => {
				element.classList.remove("carrousel-page-active");
			})
			itemsPages[index].classList.add("carrousel-page-active");
			if (index == 0)
			{
				carrousel_s2.classList.add("carrousel-active");
				carrousel_s1.classList.add("carrousel-left");
				carrousel_s3.classList.add("carrousel-right");	
			}
			else if (index == 1)
			{
				carrousel_s1.classList.add("carrousel-active");
				carrousel_s2.classList.add("carrousel-right");
				carrousel_s3.classList.add("carrousel-left");
			}
			else if (index == 2)
			{
				carrousel_s3.classList.add("carrousel-active");	
				carrousel_s1.classList.add("carrousel-right");
				carrousel_s2.classList.add("carrousel-left");
			}
		}
		setInterval(slideAutomat, 3000)
	}

	const screenContainer = document.getElementById("screens");
	const imgCarrousel = document.querySelectorAll(".img-carrousel");

	if (screenContainer.getBoundingClientRect().height > 800)
	{
		imgCarrousel.forEach(img => {
			img.classList.add("img-carrousel-800");
		});
	}
	else if (screenContainer.getBoundingClientRect().height < 455)
	{
		imgCarrousel.forEach(img => {
			img.classList.add("img-carrousel-455");
		});
	}
	else if (screenContainer.getBoundingClientRect().height < 600)
	{
		imgCarrousel.forEach(img => {
			img.classList.add("img-carrousel-600");
		});
	}	
	
	function checkHeight() {
		console.log(screenContainer.getBoundingClientRect().height);
		console.log(screenContainer.getBoundingClientRect().width);
		imgCarrousel.forEach(img => {
			img.classList.remove("img-carrousel-455");
			img.classList.remove("img-carrousel-600");
			img.classList.remove("img-carrousel-800");
			if (screenContainer.getBoundingClientRect().height < 455)
				img.classList.add("img-carrousel-455");
			else if (screenContainer.getBoundingClientRect().height < 600)
				img.classList.add("img-carrousel-600");
			else if (screenContainer.getBoundingClientRect().height > 600)
				img.classList.add("img-carrousel-800");
		});
	}
	window.addEventListener('resize', checkHeight);
}