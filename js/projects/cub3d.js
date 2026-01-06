import { eventListenerNavigator } from "../eventListener/eventListenerNavigator.js";
import { rotationScreen } from "../eventListener/rotation-screen.js";
import { generateNavigatorHTML } from "../navigator.js";
import { loadTranslations } from "../translation.js";

document.addEventListener('DOMContentLoaded', async () => 
	{
		loadCub3DPage();
	});

export async function loadCub3DPage()
{
	const app = document.getElementById("app");
	if (app)
	{
		app.innerHTML = "";
		app.innerHTML = generateCub3DPage();
		app.classList.add("app-theme");
	}

	await loadTranslations();
	eventListenerNavigator(document.getElementById("container-project"));
	rotationScreen(document.getElementById("container-project"));
}

function generateCub3DPageHTML()
{
	return `
	<div class="container-orientation-message" id="container-orientation-message">
		<h2 data-translate-key="message-orientation"></h2>
		<h1>
			<i class="fa-solid fa-rotate"></i>
		</h1>
	</div>
	<div class="container-project" id="container-project">
		<h1 class="title-page">Cub3D</h1>
		<div class="container-project-content" id="container-project-content">
			<video src="videos/cub3d.mp4" autoplay loop muted controls></video>
			<h1 class="title-project-page" data-translate-key="project-presentation"></h1>
			<p class="text-presentation-project-page" data-translate-key="project-description-cub3d"></p>
			<h1 class="title-project-page" data-translate-key="technologies-demandee"></h1>
			<div class=container-technologies-languages>
				<div class="container-technologies">
					<h3 class="title-technologies-languages" data-translate-key="technologies"></h3>
					<ul class="list-technologies-languages">
						<li>MinilibX</li>
					</ul>
				</div>
				<div class="container-languages">
					<h3 class="title-technologies-languages" data-translate-key="languages"></h3>
					<ul class="list-technologies-languages">
						<li>C</li>
						<li>Makefile</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	`
}

function generateCub3DPage()
{
	const navigator = generateNavigatorHTML()
	const body = generateCub3DPageHTML();
	return navigator + body;
}
