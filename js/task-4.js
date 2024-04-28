const form = document.querySelector(".login-form")

form.addEventListener("submit", handleSubmit);

function handleSubmit (event) {
    event.preventDefault();

    let texValue = true;

    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        if(!input.value.trim()) {
            texValue = false;
        }
    });

    if (!texValue) {
        return alert ("All form fields must be filled in");
    }

    const inputInfo = {};

    form.querySelectorAll("input").forEach(input => {
        inputInfo[input.name] = input.value.trim()
    })

    console.log(inputInfo);

    event.target.reset();
}

