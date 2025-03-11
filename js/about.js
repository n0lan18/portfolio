import { eventListenerAbout } from "./eventListener/eventListenerAbout.js";
import { eventListenerNavigator } from "./eventListener/eventListenerNavigator.js";
import { rotationScreen } from "./eventListener/rotation-screen.js";
import { generateNavigatorHTML } from "./navigator.js";
import { loadTranslations } from "./translation.js";

document.addEventListener('DOMContentLoaded', async () => 
{
	await loadAboutpage();
});

export async function loadAboutpage()
{
	const app = document.getElementById("app");
	if (app)
		app.innerHTML = generateAboutPage();

	await loadTranslations();
	eventListenerNavigator(document.getElementById("container-about"));
	eventListenerAbout();
	rotationScreen(document.getElementById("container-about"));
}

function generateAboutPageHTML()
{
	return `
	<div class="container-orientation-message" id="container-orientation-message">
		<h2 data-translate-key="message-orientation"></h2>
		<h1>
			<i class="fa-solid fa-rotate"></i>
		</h1>
	</div>
	<div class="container-about" id="container-about">
		<h1 class="title-page" data-translate-key="about"></h1>
		<div class="container-presentation-perso">
			<div class="photo-presentation-perso">
				<img class="img-presentation-perso" src="images/Nolan-photo.jpg" alt="photo presentation" />
			</div>
			<div class="text-presentation-perso">
				<h1 class="prenom-presentation">nolan</h1>
				<h1 class="name-presentation">LEGGERI</h1>
				<h2 data-translate-key="profession-dev"></h2>
				<div class="container-button-presentation">
					<button class="button-linkedin-presentation" id="button-linkedin-presentation">
						<img class="img-linkedIn" src="images/logo-linkedIn.png" alt="logo linkedIn"/>
					</button>
					<button class="button-email-presentation" id="button-email-presentation">
						<i class="fa-solid fa-envelope img-email"></i>
					</button>
				</div>
			</div>
		</div>
		<div class="container-text-presentation">
			<p data-translate-key="paragraphe-1"></p>
			<p data-translate-key="paragraphe-2"></p>
			<p data-translate-key="paragraphe-3"></p>
		</div>
	</div>
	`
}

function generateAboutPage()
{
	const navigator = generateNavigatorHTML()
	const body = generateAboutPageHTML();
	return navigator + body;
}