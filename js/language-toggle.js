import { loadTranslations } from "./translation.js";

function setActiveLanguage(lang) {
	const translateNavigatorEN = document.getElementById("translate-navigator-en");
	const translateNavigatorFR = document.getElementById("translate-navigator-fr");

	if (!translateNavigatorEN || !translateNavigatorFR) {
		return;
	}

	if (lang === "FR") {
		translateNavigatorFR.classList.add("translate-active");
		translateNavigatorFR.classList.remove("translate-inactive");
		translateNavigatorEN.classList.add("translate-inactive");
		translateNavigatorEN.classList.remove("translate-active");
	} else {
		translateNavigatorEN.classList.add("translate-active");
		translateNavigatorEN.classList.remove("translate-inactive");
		translateNavigatorFR.classList.add("translate-inactive");
		translateNavigatorFR.classList.remove("translate-active");
	}
}

function getInitialLanguage() {
	return localStorage.getItem("language") || document.documentElement.lang.toUpperCase() || "FR";
}

document.addEventListener("DOMContentLoaded", async () => {
	const translateContainer = document.getElementById("translate-container");
	const translateNavigatorEN = document.getElementById("translate-navigator-en");
	const translateNavigatorFR = document.getElementById("translate-navigator-fr");

	if (!translateContainer || !translateNavigatorEN || !translateNavigatorFR) {
		return;
	}

	const initialLang = getInitialLanguage();
	setActiveLanguage(initialLang);
	await loadTranslations();

	translateContainer.addEventListener("click", async (event) => {
		const target = event.target;
		if (target.id !== "translate-navigator-en" && target.id !== "translate-navigator-fr") {
			return;
		}

		const newLang = target.textContent.trim().toUpperCase();
		if (newLang !== "EN" && newLang !== "FR") {
			return;
		}

		localStorage.setItem("language", newLang);
		setActiveLanguage(newLang);
		await loadTranslations();
	});
});
