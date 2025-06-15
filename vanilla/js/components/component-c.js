export function componentC() {
  console.log("Component C initialized");
  // Additional logic for Component C can be added here
  document.body.appendChild(
    document.createElement("div")
  ).textContent = "Component C is active";
}