export function rotationScreen(element)
{
	window.addEventListener("resize", () => {

		const navigatorContainer = document.getElementById("container-navigator");
		const messageContainer = document.getElementById("container-orientation-message");
		if (isMobileDevice() && !checkOrientation())
		{
			navigatorContainer.style.display = "none";
			element.style.display = "none";
			messageContainer.style.display = "flex";
		}
		else
		{
			messageContainer.style.display = "none";
			navigatorContainer.style.display = "flex";
			element.style.display = "flex";
		}
	});
}

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
}

function checkOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
		return true;
    } else {
		return false;
    }
}