export function componentA() {
  console.log("Component A initialized");
  // Additional logic for Component A can be added here
  document.body.appendChild(
    document.createElement("div")
  ).textContent = "Component A is active";
}