const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", handleInput);

function handleInput(event) {

    const inputValue = event.currentTarget.value.trim();

    if (inputValue) {
        outputName.textContent = inputValue
    } else {
        outputName.textContent = "Anonymous";
    }
}
