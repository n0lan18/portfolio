
let translations = {};

export async function loadTranslations()
{
	try
	{
        const lang = localStorage.getItem('language') || 'EN';
		const response = await fetch(`lang/${lang}.json`);
		if (!response.ok) {
            throw new Error(`Erreur de chargement du fichier: ${response.statusText}`);
        }
		translations = await response.json();
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
		if (key == "name-placeholder")
			element.placeholder = translations[key];
		else if (key == "email-placeholder")
			element.placeholder = translations[key];
		else if (key == "object-placeholder")
			element.placeholder = translations[key];
		else if (key == "message-placeholder")
			element.placeholder = translations[key];		
		else if (key == "button-carrousel")
            element.value = translations[key];	
        else if (translations[key])
			element.textContent = translations[key];
	});
}