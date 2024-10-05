class LayoutOne {

    card_one() {

        // card container
        const card_container = document.createElement("div");
        // card image container
        const card_img = document.createElement("div");
        // card body container
        this.card_body = document.createElement("div");


        // append card container into the main section
        card_container.classList.add("card-container");


        // card-container have img card,and body card
        // img card
        card_container.appendChild(card_img);
        card_img.classList.add("card-img");

        // rate container
        const rateCard = document.createElement("div");
        rateCard.classList.add("rate-card");

        // img rate
        const imgRate = document.createElement("img");
        imgRate.src = "https://img.icons8.com/puffy-filled/50/star.png";
        imgRate.alt = "star";
        imgRate.classList.add("logo20", "invert");

        // point rate
        this.pointRate = rateCard;

        // product image
        this.imgProduct = document.createElement("img");
        this.imgProduct.classList.add("product-img");

        // append rate into img card
        card_img.appendChild(rateCard);
        rateCard.appendChild(imgRate);
        card_img.appendChild(this.imgProduct);

        // body card
        card_container.appendChild(this.card_body);
        this.card_body.classList.add("card-body");

        // card label container, and three-btn-container
        const contentContainer = document.createElement("div");
        contentContainer.classList.add("content-container");

        // card label container
        const cardLabelContainer = document.createElement("div");
        cardLabelContainer.classList.add("card-label-container");

        // label, and price
        this.cardLabel = document.createElement("div");
        this.cardLabel.classList.add("card-label");

        // text
        this.textLabel = this.cardLabel;

        // price
        const priceCard = document.createElement("div");
        priceCard.classList.add("price-card");

        this.priceText = priceCard;

        // sub percentage
        const preSub = document.createElement("sub");
        this.textSub = preSub;

        // three btn container
        const threeBtnContainer = document.createElement("div");
        threeBtnContainer.classList.add("three-btn-container");

        const btnImg = [
            "https://img.icons8.com/puffy/32/like.png",
            "https://img.icons8.com/puffy/32/add-shopping-cart.png",
            "https://img.icons8.com/puffy/32/share.png"
        ];

        const btnAlt = ["Like", "Add cart", "Share"];

        let lenBtn = btnImg.length;

        let btnContent, imgContent; // button as like, add cart,and share

        this.card_body.appendChild(contentContainer); // card label contianer append into card body

        // text label for displaying product name
        contentContainer.appendChild(cardLabelContainer);
        cardLabelContainer.append(this.cardLabel);

        // price and precentage for displaying price card
        cardLabelContainer.appendChild(priceCard);
        priceCard.appendChild(preSub);

        contentContainer.appendChild(threeBtnContainer); // three btn append into card body

        for (let i = 0; i < lenBtn; i++) {

            btnContent = document.createElement("button");
            btnContent.classList.add("btn");
            btnContent.title = btnAlt[i];

            imgContent = document.createElement("img");
            imgContent.classList.add("logo20", "invert");
            imgContent.src = btnImg[i];
            imgContent.alt = btnAlt[i];

            threeBtnContainer.appendChild(btnContent);
            btnContent.appendChild(imgContent);

        }

        return card_container;
    }


}

class LayoutTwo extends LayoutOne {

    card_two() {

        super.card_one();
        // colorContainer
        const colorContainer = document.createElement("div");
        colorContainer.classList.add("color-container");
        // adding with body into the color container
        this.card_body = colorContainer;

        // button color
        for (let i = 0; i < 3; i++) {

            buttonColor = document.createElement("button");
            divColor = document.createElement("div");

            imgColor = document.createElement("img");
            imgColor.classList.add("logo20");

            // append button into the color container
            colorContainer.appendChild(buttonColor);
            buttonColor.appendChild(divColor);
            divColor.appendChild(imgColor);
        }



    }
}

export { LayoutOne, LayoutTwo };