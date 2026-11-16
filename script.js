const activateButton = document.getElementById("activateBtn");
const buttonStatus = document.getElementById("buttonStatus");

activateButton.addEventListener("click", () => {
  activateButton.textContent = "✓ Activated";
  buttonStatus.textContent = "Button activated!";
});

document.getElementById("demoForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  document.getElementById("formStatus").textContent = "✓ Submitted";
  form.reset();
});
