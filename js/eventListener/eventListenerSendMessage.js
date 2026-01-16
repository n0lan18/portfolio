export function eventListenerSendMessage()
{
	emailjs.init({
		publicKey: "vHrtD8pHSz_KfXh1Q",
	});

	const buttonFormSendMessage = document.getElementById("form-sendMessage-page");
	if (buttonFormSendMessage)
	{
		buttonFormSendMessage.addEventListener("submit", (event) => {
			event.preventDefault();
			const templateParams = {
				subject: document.getElementById("subject").value,
                name: document.getElementById("name").value,
                email: document.getElementById("email").value, 
                message: document.getElementById("message").value
            };

			emailjs.send("service_56fk69r", "template_sn9g6gh", templateParams)
			.then(response => {
				const containerValidMail = document.getElementById("container-valid-email");
				if (containerValidMail)
				{
					buttonFormSendMessage.style.display = "none";
					containerValidMail.classList.remove("container-valid-email");
					containerValidMail.classList.add("container-valid-email-active");
					setTimeout(() => {
						window.location.href = "/portfolio/index.html";
					}, 5000);
				}

			})
			.catch(error => {
				alert("Error sending email !");
			});
		})
	}
}
