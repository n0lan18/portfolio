import { eventListenerNavigator } from "./eventListener/eventListenerNavigator.js";
import { eventListenerWorks } from "./eventListener/eventListenerWorks.js";
import { rotationScreen } from "./eventListener/rotation-screen.js";
import { generateNavigatorHTML } from "./navigator.js";
import { loadTranslations } from "./translation.js";

document.addEventListener('DOMContentLoaded', async () => 
	{
		loadWorksPage();
	});

export async function loadWorksPage()
{
	const app = document.getElementById("app");
	if (app)
	{
		app.innerHTML = "";
		app.innerHTML = generateWorksPage();
	}

	await loadTranslations();
	eventListenerNavigator(document.getElementById("container-workspage"));
	eventListenerWorks();
	rotationScreen(document.getElementById("container-workspage"));
}

function generateWorksPageHTML()
{
	return `
	<div class="container-orientation-message" id="container-orientation-message">
		<h2 data-translate-key="message-orientation"></h2>
		<h1>
			<i class="fa-solid fa-rotate"></i>
		</h1>
	</div>
	<div class="container-workspage" id="container-workspage">
		<h1 class="title-page" data-translate-key="work"></h1>
		<div class="container-projects-workspage">
			<div class="container-work-line-1">
				<div class="project-1">
					<h2 class="name-carrousel">Transcendance</h2>
					<h3 class="complement-name-carrousel" data-translate-key="complement-name-carrousel-s1"></h3>
					<p class="description-carrousel" data-translate-key="description-carrousel-s1"></p>
					<input id="button-transcendance-project" class="button-carrousel" type=button data-translate-key="button-carrousel" value="">
					<img id="img-carrousel-s1" class="img-carrousel img-transcendance" src="images/homepage/transcendance-presentation.png"/>
				</div>
				<div class="project-2">
					<h2 class="name-carrousel">So_long</h2>
					<h3 class="complement-name-carrousel" data-translate-key="complement-name-carrousel-s2"></h3>
					<p class="description-carrousel" data-translate-key="description-carrousel-s2"></p>
					<input id="button-so-long-project" class="button-carrousel" type=button  data-translate-key="button-carrousel" value="">
					<img id="img-carrousel-s2" class="img-carrousel" src="images/homepage/so_long_presentation.png"/>
				</div>
			</div>
			<div class="container-work-line-1">
				<div class="project-3">
					<h2 class="name-carrousel">Cub3D</h2>
					<h3 class="complement-name-carrousel" data-translate-key="complement-name-carrousel-s3"></h3>
					<p class="description-carrousel" data-translate-key="description-carrousel-s3"></p>
					<input id="button-cub3d-project" class="button-carrousel" type=button data-translate-key="button-carrousel" value="">
					<img id="img-carrousel-s3" class="img-carrousel" src="images/homepage/cub3d_presentation.png"/>
				</div>
			</div>
		</div>
	</div>
	`
}

function generateWorksPage()
{
	const navigator = generateNavigatorHTML()
	const body = generateWorksPageHTML();
	return navigator + body;
}