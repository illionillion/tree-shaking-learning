export function componentB() {
  console.log("Component B initialized");
  // Additional logic for Component B can be added here
  document.body.appendChild(
    document.createElement("div")
  ).textContent = "Component B is active";
}