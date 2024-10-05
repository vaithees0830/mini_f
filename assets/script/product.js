


const displayContent = document.querySelector(".display-product-container");

const items = ["Electroics", "Grocery", "Mobile", "Fashion"];
const logoItems = [
    "https://img.icons8.com/puffy/32/electronics.png",
    "https://img.icons8.com/puffy/32/shopping-cart-loaded.png",
    "https://img.icons8.com/puffy/32/iphone-x.png",
    "https://img.icons8.com/puffy/32/bag-front-view.png"
]

let itemContainer, topContent, logName, logoContent, nameContent, mainContent;

// product container
for (let i = 0; i < items.length; i++) {

    // container
    itemContainer = document.createElement("div");
    itemContainer.classList.add("product-container");

    // top content for name,and logo
    topContent = document.createElement("div");
    topContent.classList.add("top-content")

    // compain logo,and name.
    logName = document.createElement("div");
    logName.classList.add("logo-content", "flex");

    // logo
    logoContent = document.createElement("img");
    logoContent.src = logoItems[i];
    logoContent.classList.add("logo20", "invert");

    // name
    nameContent = document.createTextNode(`${items[i]}`);

    // main content for displaying product
    mainContent = document.createElement("div");
    mainContent.classList.add("main-content");


    displayContent.append(itemContainer); // product container items
    itemContainer.appendChild(topContent); // product container top area for displaying name,and logo
    // 1
    topContent.appendChild(logName); // it's compain logo,and name
    logName.appendChild(logoContent);
    logName.appendChild(nameContent);
    // 2
    itemContainer.appendChild(mainContent); // it's product area

}

