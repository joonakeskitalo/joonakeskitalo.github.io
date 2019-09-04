document.getElementById("showOverlayButton").addEventListener("click", showOverlay);
document.getElementById("hideOverlayButton").addEventListener("click", hideOverlay);

function showOverlay() {
	document.getElementById("overlay").className = "js-off-canvas-container c-off-canvas-container is-active";
}

function hideOverlay() {
	document.getElementById("overlay").className = "js-off-canvas-container c-off-canvas-container";
}