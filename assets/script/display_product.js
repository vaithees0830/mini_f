import { LayoutOne, LayoutTwo } from "./layout.js";

// product container script
const xmlPost = new XMLHttpRequest;

window.onload = () => {

    if (xmlPost.readyState == 4 && xmlPost.status == 200) {

        const textContent = xmlPost.responseText;
        const dataContext = JSON.parse(textContent);

        let mainSection = document.querySelector(".main-section").children[1];

        class ElectroicsDisplay extends LayoutOne {

            electroicsDisplay() {
                
                let lenData = dataContext[0].length; // length of electoric data
                console.log(lenData);

                let elArea = mainSection.children[0].children[1]; // location into electoric output

                let elData = dataContext[0]; // data for electorice

                // super.card_one();
                for (let i = 0; i < lenData; i++) {

                    const card = this.card_one();
                    const productName = document.createTextNode(elData[i].name);
                    const textPrice = document.createTextNode(elData[i].price);
                    const productPrecentage = document.createTextNode(elData[i].discount);
                    const ratePoint = document.createTextNode(elData[i].rating);
                    this.cardLabel.title = elData[i].name;
                    this.priceText.prepend(textPrice);
                    this.textLabel.appendChild(productName);
                    this.textSub.appendChild(productPrecentage);
                    this.pointRate.appendChild(ratePoint);
                    this.imgProduct.src = elData[i].image;
                    elArea.appendChild(card);

                }

            }
        }

        class GroceryDisplay extends LayoutOne {

            groceryDisplay() {
                
                let lenData = dataContext[0].length; // length of electoric data
                console.log(lenData);

                let elArea = mainSection.children[1].children[1]; // location into electoric output

                let elData = dataContext[2]; // data for electorice

                // super.card_one();
                for (let i = 0; i < lenData; i++) {

                    const card = this.card_one();
                    const productName = document.createTextNode(elData[i].name);
                    const textPrice = document.createTextNode(elData[i].price);
                    const productPrecentage = document.createTextNode(elData[i].discount);
                    const ratePoint = document.createTextNode(elData[i].rating);
                    this.cardLabel.title = elData[i].name;
                    this.priceText.prepend(textPrice);
                    this.textLabel.appendChild(productName);
                    this.textSub.appendChild(productPrecentage);
                    this.pointRate.appendChild(ratePoint);
                    this.imgProduct.src = elData[i].image;
                    elArea.appendChild(card);

                }

            }
        }

        class MobileDisplay extends LayoutTwo {


            mobileDisplay () {
                let lenData = dataContext[0].length; // length of electoric data
                console.log(lenData);

                let elArea = mainSection.children[2].children[1]; // location into electoric output
                
                let elData = dataContext[1]; // data for electorice
                
                for (let i = 0; i < lenData; i++) {

                    const card = this.card_one();
                    const productName = document.createTextNode(elData[i].name);
                    const textPrice = document.createTextNode(elData[i].price);
                    const productPrecentage = document.createTextNode(elData[i].discount);
                    const ratePoint = document.createTextNode(elData[i].rating);
                    
                    this.cardLabel.title = elData[i].name;
                    this.priceText.prepend(textPrice);
                    this.textLabel.appendChild(productName);
                    this.textSub.appendChild(productPrecentage);
                    this.pointRate.appendChild(ratePoint);
                    this.imgProduct.src = elData[i].image;
                    elArea.appendChild(card);
                }

            }

        }

        class FashionDisplay extends LayoutTwo {
            fashionDisplay () {
                
                let lenData = dataContext[0].length; // length of electoric data
                console.log(lenData);

                let elArea = mainSection.children[3].children[1]; // location into electoric output

                let elData = dataContext[3]; // data for electorice

                // super.card_one();
                for (let i = 0; i < lenData; i++) {

                    const card = this.card_one();
                    const productName = document.createTextNode(elData[i].name);
                    const textPrice = document.createTextNode(elData[i].price);
                    const productPrecentage = document.createTextNode(elData[i].discount);
                    const ratePoint = document.createTextNode(elData[i].rating);
                    this.cardLabel.title = elData[i].name;
                    this.priceText.prepend(textPrice);
                    this.textLabel.appendChild(productName);
                    this.textSub.appendChild(productPrecentage);
                    this.pointRate.appendChild(ratePoint);
                    this.imgProduct.src = elData[i].image;
                    elArea.appendChild(card);

                }

            }
        }



        let data = new ElectroicsDisplay();
        data.electroicsDisplay();

        let dataGrocery = new GroceryDisplay();
        dataGrocery.groceryDisplay();

        let dataMobile = new MobileDisplay();
        dataMobile.mobileDisplay();

        let dataFashion = new FashionDisplay();
        dataFashion.fashionDisplay();

        // if end for checking
    }


    // load end
}



const getPath = "https://vaithees0830.github.io/mini_f/assets/script/json/product.json";

xmlPost.open("GET", getPath, false);
xmlPost.send();
