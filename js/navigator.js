export function generateNavigatorHTML(homepage)
{
	let path;

	if (homepage)
		path = "";
	else
		path = "../";
	return `
		<div class="container-navigator" id="container-navigator">
			<div class="hamburger-menu" id="hamburger-menu">
				<span class="hamburger-line"></span>
				<span class="hamburger-line"></span>
				<span class="hamburger-line"></span>
			</div>
		</div>
		<div class="container-navigator-menu" id="container-navigator-menu">
			<ul class="navigator-list" id="navigator-list">
				<li class="navigator-item">
					<a id="text-home-navigator" class="text-home-navigator text-menu-navigator" href="${path}index.html" data-translate-key="home"></a>
				</li>
				<li class="navigator-item">
					<a id="text-works-navigator" class="text-works-navigator text-menu-navigator" href="${path}html/works.html" data-translate-key="work"></a>
				</li>
				<li class="navigator-item">
					<a class="text-about-navigator text-menu-navigator" href="${path}html/about.html" data-translate-key="about"></a>
				</li>
				<li class="navigator-item">
					<a class="text-send-message-navigator text-menu-navigator" href="${path}html/send-message.html" data-translate-key="send-message"></a>
				</li>
				<hr class="line-menu-navigator">
				<li class="navigator-item">
					<div id="translate-container" class="translate-container">
						<h2 id="translate-navigator-en" class="translate-navigator translate-navigator-en">EN</h2>
						<h2 id="translate-navigator-fr" class="translate-navigator translate-navigator-fr">FR</h2>
					</div>
				</li>	
			</ul>
			<div class="container-name-homepage">
				<img class="name-homepage" src="${path}images/name/nolanLEGGERI-black.svg" alt="name homepage">
			</div>
		</div>
	`
}