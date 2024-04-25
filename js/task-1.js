const categoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.length}`);

for(const element of categoriesEl) {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
}
