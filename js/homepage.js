import { eventListenerHomepage } from "./eventListener/eventListenerHomepage.js";
import { eventListenerNavigator } from "./eventListener/eventListenerNavigator.js";
import { rotationScreen } from "./eventListener/rotation-screen.js";
import { generateNavigatorHTML } from "./navigator.js";
import { loadTranslations } from "./translation.js";

document.addEventListener('DOMContentLoaded', async () => 
{
	await loadHomepage();
});

export async function loadHomepage()
{
	const app = document.getElementById("app");
	if (app)
		app.innerHTML = generateHomePage();

	const visitSession = sessionStorage.getItem("visit");
	console.log(visitSession)
	if (!visitSession)
	{
		document.getElementById("container-homepage").style.display = "none";
		document.getElementById("container-navigator").style.display = "none";
		document.getElementById("container-video-entrance").style.display = "flex";
	}
	else
	{
		document.getElementById("container-homepage").style.display = "flex";
		document.getElementById("container-navigator").style.display = "flex";
		document.getElementById("container-video-entrance").style.display = "none";
	}

	await loadTranslations("homepage");
	eventListenerNavigator(document.getElementById("container-homepage"));
	eventListenerHomepage();
	rotationScreen(document.getElementById("container-homepage"));
}

function generateHomePageHTML()
{
	return `
	<div class="container-orientation-message" id="container-orientation-message">
		<h2 data-translate-key="message-orientation"></h2>
		<h1>
			<i class="fa-solid fa-rotate"></i>
		</h1>
	</div>
	<div class="container-video-entrance" id="container-video-entrance">
		<video class="video-entrance" id="video-entrance" src="videos/entree-portfolio.mp4" autoplay muted playsinline></video>
	</div>
	<div class="container-homepage" id="container-homepage">
		<h1 class="title-page" data-translate-key="home"></h1>
		<div class="container-carrousel-projects-homepage">
	   		<ul id="screens" class="screens">
				<li id="carrousel-s1" class="carrousel-left">
					<div class="carrousel-s1">
						<div class="container-text-carrousel">
							<h2 class="name-carrousel">Transcendance</h2>
							<h3 class="complement-name-carrousel" data-translate-key="complement-name-carrousel-s1"></h3>
							<p class="description-carrousel" data-translate-key="description-carrousel-s1"></p>
							<input id="button-carrousel-s1" class="button-carrousel" type=button data-translate-key="button-carrousel" value="">
						</div>
						<div class="container-img-carrousel">
							<img id="img-carrousel-s1" class="img-carrousel" src="images/homepage/transcendance-presentation.png"/>
						</div>		
					</div>
				</li>
				<li id="carrousel-s2" class="carrousel-active">
					<div class="carrousel-s2">
						<div class="container-text-carrousel">
							<h2 class="name-carrousel">So_long</h2>
							<h3 class="complement-name-carrousel" data-translate-key="complement-name-carrousel-s2"></h3>
							<p class="description-carrousel" data-translate-key="description-carrousel-s2"></p>
							<input id="button-carrousel-s2" class="button-carrousel" type=button  data-translate-key="button-carrousel" value="">
						</div>
						<div class="container-img-carrousel">
							<img id="img-carrousel-s2" class="img-carrousel" src="images/homepage/so_long_presentation.png"/>
						</div>
					</div>
				</li>
				<li id="carrousel-s3" class="carrousel-right">
					<div class="carrousel-s3">
						<div class="container-text-carrousel">
							<h2 class="name-carrousel">Cub3D</h2>
							<h3 class="complement-name-carrousel" data-translate-key="complement-name-carrousel-s3"></h3>
							<p class="description-carrousel" data-translate-key="description-carrousel-s3"></p>
							<input id="button-carrousel-s3" class="button-carrousel" type=button data-translate-key="button-carrousel" value="">
						</div>
						<div class="container-img-carrousel">
							<img id="img-carrousel-s3" class="img-carrousel" src="images/homepage/cub3d_presentation.png"/>
						</div>		
					</div>
				</li>
			</ul>
			<div class="conteneur-pagination">
				<ul id="pagination-list" class="pagination-list">
					<li id="carrousel-page-1" class="carrousel-page carrousel-page-active"></li>
					<li id="carrousel-page-2" class="carrousel-page"></li>
					<li id="carrousel-page-3" class="carrousel-page"></li>
				</ul>
			</div>
		</div>
		<div class="container-name-homepage">
			<img class="name-homepage" src="images/name/nolanLEGGERI-white.svg" alt="name homepage">
		</div>
	</div>
	`
}

function generateHomePage()
{
	const navigator = generateNavigatorHTML("homepage")
	const body = generateHomePageHTML();
	return navigator + body;
}