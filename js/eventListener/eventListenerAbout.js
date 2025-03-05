export function eventListenerAbout()
{
	const buttonLinkedIn = document.getElementById("button-linkedin-presentation");
	if (buttonLinkedIn)
	{
		buttonLinkedIn.addEventListener('click', () => {
			window.location.href = 'https://www.linkedin.com/in/nleggeri/';
		});
	}

	const buttonEmail = document.getElementById("button-email-presentation");
	if (buttonEmail)
	{
		buttonEmail.addEventListener('click', () => {
			window.location.href = 'send-message.html';
		});
	}
}