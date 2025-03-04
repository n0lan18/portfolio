import { loadTranslations } from "../translation.js";

export function eventListenerNavigator(elementPage)
{
	const hamburgerMenu = document.getElementById("hamburger-menu");
	const containerNavMenu = document.getElementById("container-navigator-menu");
	hamburgerMenu.addEventListener('click', () => {
		const isActive = hamburgerMenu.classList.toggle("is-active");
		if (isActive)
		{
			elementPage.style.display = "none";
			containerNavMenu.style.display = "flex";
		}
		else
		{
			containerNavMenu.style.display = "none";
			elementPage.style.display = "flex";
		}
	});

	modifyTextMenuActive(elementPage);

	const translateNavigatorFR = document.getElementById("translate-navigator-fr");
	const translateNavigatorEN = document.getElementById("translate-navigator-en");
	const languageStorage = localStorage.getItem('language');
	if (!languageStorage || languageStorage == "EN")
	{
		translateNavigatorFR.classList.add("translate-inactive");
		translateNavigatorEN.classList.add("translate-active");
	}
	else if (languageStorage == "FR")
	{
		translateNavigatorFR.classList.add("translate-active");
		translateNavigatorEN.classList.add("translate-inactive");		
	}

	const translationButton = document.getElementById("translate-container");
	if (translationButton)
	{
		translationButton.addEventListener('click', async (event) => {
			console.log(event.target)
			if (event.target.id === "translate-navigator-en" || event.target.id === "translate-navigator-fr")
			{
				if (event.target.id === "translate-navigator-en" && event.target.classList.contains("translate-inactive"))
				{
					const translateNavigatorFR = document.getElementById("translate-navigator-fr");
					event.target.classList.remove("translate-inactive");
					event.target.classList.add("translate-active");
					translateNavigatorFR.classList.remove("translate-active");
					translateNavigatorFR.classList.add("translate-inactive");
				}
				else if (event.target.id === "translate-navigator-fr" && event.target.classList.contains("translate-inactive"))
				{
					const translateNavigatorEN = document.getElementById("translate-navigator-en");
					event.target.classList.remove("translate-inactive");
					event.target.classList.add("translate-active");
					translateNavigatorEN.classList.remove("translate-active");
					translateNavigatorEN.classList.add("translate-inactive");
				}
				localStorage.setItem('language', event.target.textContent);
				await loadTranslations();
			}
		});
	}
}

function modifyTextMenuActive(elementPage)
{
	if (elementPage.id == "container-homepage")
		document.getElementById("text-home-navigator").classList.add("page-menu-navigator-active");
	else if (elementPage.id == "container-workspage")
		document.getElementById("text-works-navigator").classList.add("page-menu-navigator-active");
}