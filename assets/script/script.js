// it's event open nav bar
const mainS = document.querySelector(".main-section");

function openNav(event) {
    const openPath = event.target.ownerDocument.body.children[0].children[0];
    if (openPath.classList.contain = "display-none") {
        openPath.classList.remove( "display-none");
        mainS.style.borderTopLeftRadius = "1.5pc";
    }
}

// it's event close nav bar

function closeNav(event) {
    const closePath = event.target.parentElement.parentElement.parentElement;
    if (closePath.classList.contain = "display-none") {
        closePath.classList.add( "display-none");
        mainS.style.borderTopLeftRadius = "0";
    }
}

// option-section

const option = document.getElementById("option");
const pathOption = option.nextElementSibling;

option.addEventListener("click", () => {
    if (pathOption.classList.contains("hidden")) {
        pathOption.classList.remove("hidden");
        pathOption.classList.add("visible");
    }
});

document.body.addEventListener("click", (e) => {
    if (!option.contains(e.target) && !pathOption.contains(e.target)){
        pathOption.classList.remove("visible");
        pathOption.classList.add("hidden");
    }
});

const mode = document.getElementById("mode");

mode.addEventListener("click", (event) => {
    const modePath = event.target.ownerDocument.body;
    if (modePath.classList.contains("dark") === false) {
        modePath.classList.add("dark");
        mode.children[0].src = "https://img.icons8.com/puffy/32/sun.png";
        mode.children[0].alt = "sun";
        mode.childNodes[2].textContent ="Light";
    } else {
        modePath.classList.remove("dark");
        mode.children[0].src = "https://img.icons8.com/puffy/32/bright-moon.png";
        mode.children[0].alt = "bright-moon";
        mode.childNodes[2].textContent ="Dark";
    }
});

// const openSilder = document.getElementById("openSilder");
// const closeSilder = document.getElementById("closeSilder");

// openSilder.addEventListener("click", (event) => {
//     const sildedOpen = event.target.ownerDocument.body.children[0].children[0];
//     if (sildedOpen.classList.contain = "silde") {
//         sildedOpen.classList.remove("sildeX");
//         sildedOpen.classList.add("silde");
//     }
// })

// closeSilder.addEventListener("click", (event) => {
//     const sildedOpen = event.target.ownerDocument.body.children[0].children[0];
//     if (sildedOpen.classList.contain = "silde") {
//         sildedOpen.classList.remove("silde");
//         sildedOpen.classList.add("sildeX");

//     }
// })

try {

    // json xmlHttpRequest object
    const xmlHttp = new XMLHttpRequest;
    
    
    // data
    xmlHttp.onload = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

            var textData = xmlHttp.responseText;
            var jsonData = JSON.parse(textData);
            
            const silderContainer = document.querySelector(".silder-content");
            for (let i = 0; i < jsonData[0].length; i++) {
                // silder image -> container
                const imageSilderContainer = document.createElement("div");
                imageSilderContainer.classList.add("image-content");
                silderContainer.append(imageSilderContainer);
                // image silder
                const imgContent = document.createElement("img");
                imgContent.src = jsonData[0][i].image;
                imgContent.alt = `img${i+1}`;
                imageSilderContainer.appendChild(imgContent);
            }
            
            // action of silder images
            
            const actionPath = silderContainer.children.length;

            const contentImage = silderContainer.children;

            for (let k = 0; k < actionPath; k++) {
                contentImage[k].classList.add("hidden");

                if (contentImage[0].classList[1] === "hidden") {
                    contentImage[0].classList.add("visible");
                }

            }


        }
    }
    
    // path of json file
    const path =  "https://vaithees0830.github.io/mini_f/assets/script/json/slider.json";
    // send request get and set;
    xmlHttp.open("GET", path);
    xmlHttp.send();
    
}
catch (e) {
    console.log(e);
}




/*

id 1
image 
name Fastrack Revoltt FS1
rating 4.2
price 999
discount 76% off


*/
