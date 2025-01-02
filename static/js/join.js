const discordURL = "https://discord.gg/";

if (slug !== "") {
	window.location.replace(`${discordURL}/${slug}`);
} else {
	setTimeout(function() {
		const modal = document.getElementById("modal");
		modal.classList.add("hidden");
	}, 1000);

	const header = document.getElementById("main-header");
	const text = document.getElementById("main-text");
	const now = new Date();

	if (now.getMonth() === 0) {
		header.innerText = "Wait a second...!";
		text.innerText = "It's January! That means we should be playing in a few weeks. Sit tight, this should be updated soon!";
	} else {
		const next = now.getFullYear() + 1;
		header.innerText = "Damn... out of season";
		text.innerText = `Unfortunately, you're too late. Check backj in January of ${nextYear}, we should be playing then!`;
	}
}
