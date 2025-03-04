import { eventListenerNavigator } from "./eventListener/eventListenerNavigator.js";
import { eventListenerSendMessage } from "./eventListener/eventListenerSendMessage.js";
import { rotationScreen } from "./eventListener/rotation-screen.js";
import { generateNavigatorHTML } from "./navigator.js";
import { loadTranslations } from "./translation.js";

document.addEventListener('DOMContentLoaded', async () => 
{
	await loadSendMessage();
});

export async function loadSendMessage()
{
	const app = document.getElementById("app");
	if (app)
		app.innerHTML = generateSendMessagePage();

	await loadTranslations();
	eventListenerNavigator(document.getElementById("container-sendMessage"));
	eventListenerSendMessage();
	rotationScreen(document.getElementById("container-sendMessage"));
}

function generateSendMessagePageHTML()
{
	return `
	<div class="container-orientation-message" id="container-orientation-message">
		<h2 data-translate-key="message-orientation"></h2>
		<h1>
			<i class="fa-solid fa-rotate"></i>
		</h1>
	</div>
	<div class="container-sendMessage" id="container-sendMessage">
		<h1 class="title-page" data-translate-key="send-message"></h1>
		<form class="form-sendMessage-page" id=form-sendMessage-page>
			<h3 class="text-form-sendMessage" data-translate-key="name"></h3>
			<input class="box-form-sendMessage" type="text" id="name" data-translate-key="name-placeholder" placeholder="" required>
			<h3 class="text-form-sendMessage" data-translate-key="email"></h3>
			<input class="box-form-sendMessage" type="email" id="email" data-translate-key="email-placeholder" placeholder="" required>
			<h3 class="text-form-sendMessage" data-translate-key="subject"></h3>
			<input class="box-form-sendMessage" type="text" id="subject" data-translate-key="object-placeholder" placeholder="" required>
			<h3 class="text-form-sendMessage" data-translate-key="message"></h3>
			<textarea class="box-form-sendMessage textarea-form-sendMessage" id="message" data-translate-key="message-placeholder" placeholder="" required></textarea>
			<button id="button-form-sendMessage" class="button-form-sendMessage" type="submit" data-translate-key="send"></button>
		</form>
		<div class="container-valid-email" id="container-valid-email">
			<h2 class="valid-email" data-translate-key="valid-mail"></h2>
			<h2 class="valid-email1" data-translate-key="valid-mail1"></h2>
			<p data-translate-key="redirection-home"></p>
		</div>
	</div>
	`
}

function generateSendMessagePage()
{
	const navigator = generateNavigatorHTML()
	const body = generateSendMessagePageHTML();
	return navigator + body;
}