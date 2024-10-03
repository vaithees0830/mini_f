// product container script
const xmlPost = new XMLHttpRequest;
const displayContent = document.querySelector(".display-product-container");

window.onload = () => {
    if (xmlPost.readyState == 4 && xmlPost.status == 200) {
        
        const textContent = xmlPost.responseText;
        const dataContent = JSON.parse(textContent);

        const items = ["Electroics", "Mobile", "Fashion", "Grocery"];
        const logoItems = [
            "https://img.icons8.com/puffy/32/electronics.png", 
            "https://img.icons8.com/puffy/32/iphone-x.png", 
            "https://img.icons8.com/puffy/32/bag-front-view.png", 
            "https://img.icons8.com/puffy/32/shopping-cart-loaded.png"
        ]

        // product container
        for (let i = 0; i < dataContent.length; i++) {

            // container
            const itemContainer = document.createElement("div");
            itemContainer.classList.add("product-container");

            // top content for name,and logo
            const topContent = document.createElement("div");
            topContent.classList.add("top-content")

            // compain logo,and name.
            const logName = document.createElement("div");
            logName.classList.add("logo-content", "flex");

            // logo
            const logoContent = document.createElement("img");
            logoContent.src = logoItems[i];
            logoContent.classList.add("logo20", "invert");

            // name
            const nameContent = document.createTextNode(`${items[i]}`);

            // main content for displaying product
            const mainContent = document.createElement("div");
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

    }
}


const getPath =  "http://127.0.0.1:5500/mini_f/assets/script/json/product.json";

xmlPost.open("GET", getPath, false);
xmlPost.send();