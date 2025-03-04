export function eventListenerWorks()
{
	const buttonTranscencanceProject = document.getElementById("button-transcendance-project");
	if (buttonTranscencanceProject)
	{
		buttonTranscencanceProject.addEventListener('click', (event) => {
			window.location.href = "../html/transcendance.html";
		});
	}

	const buttonSoLongProject = document.getElementById("button-so-long-project");
	if (buttonSoLongProject)
	{
		buttonSoLongProject.addEventListener('click', (event) => {
			window.location.href = "../html/so_long.html";
		});
	}

	const buttonCub3DProject = document.getElementById("button-cub3d-project");
	if (buttonCub3DProject)
	{
		buttonCub3DProject.addEventListener('click', (event) => {
			window.location.href = "../html/cub3d.html";
		});
	}
}