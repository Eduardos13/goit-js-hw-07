function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const colorBtn = document.querySelector(".change-color");
const colorSpn = document.querySelector(".color");
const body = document.body;

colorBtn.addEventListener("click", getColorChanger);

function getColorChanger(event) {

  const getColor = getRandomHexColor();

  body.style.backgroundColor = getColor;
  colorSpn.textContent = getColor;
}

console.log(colorBtn);