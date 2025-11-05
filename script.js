//your JS code here. If required.
const colorSelect = document.querySelector("#colorSelect");
const removeBtn = document.querySelector('input[type="button"]');

removeBtn.addEventListener("click", () => {
	const selectedIndex = colorSelect.selectedIndex;

	if(selectedIndex !== -1) {
		colorSelect.remove(selectedIndex);
	}
})