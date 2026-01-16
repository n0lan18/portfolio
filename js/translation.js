
let translations = {};

export async function loadTranslations()
{
	try
	{
        const lang = localStorage.getItem('language') || document.documentElement.lang.toUpperCase() || 'FR';
		const response = await fetch(`lang/${lang}.json`);
		if (!response.ok) {
            throw new Error(`Erreur de chargement du fichier: ${response.statusText}`);
        }
		translations = await response.json();
		document.documentElement.lang = lang.toLowerCase();
		applyTranslations()
	}
	catch (error)
	{
		console.error('Erreur de chargement des traductions:', error);
	}
}

function applyTranslations()
{
	document.querySelectorAll("[data-translate-key]").forEach(element => {
		const key = element.getAttribute("data-translate-key");
		const translation = translations[key];
		if (!translation) {
			return;
		}

		if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
			if (element.hasAttribute("placeholder")) {
				element.placeholder = translation;
			}
			if (element.type === "button" || element.type === "submit") {
				element.value = translation;
			}
			return;
		}

		element.textContent = translation;
	});
}
