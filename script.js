
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(ratingData => {

    console.log(ratingData)


let cart = [];

    // Now fetch your original store API
    fetch('https://www.iamtiksha.com/apis/store/public/api/v1/categories')
    .then(response => response.json())
    .then(data => {

        let cartCount = 0;

var cartDisplay = document.createElement("div");
cartDisplay.classList.add("cart-display");
cartDisplay.textContent = "🛒 Cart (0)";

document.body.appendChild(cartDisplay);

        console.log(data);

        var container = document.createElement("div");
        document.body.appendChild(container);
        container.classList.add("cont");

var links = [

    // Category 1
    [
        "https://levi.com.my/products/levis-mens-505-regular-jeans-005053168",
        "https://www.myntra.com/jeans/stylecastxrevolte/stylecast-x-revolte-men-mid-rise-regular-fit-light-fade-jeans/31564302/buy",
        "https://www.myntra.com/tshirts/roadster/roadster-men-black-self-design-round-neck-pure-cotton-t-shirt/12120676/buy",
        "https://www.myntra.com/shirts/wrogn/wrogn-navy-blue-slim-fit-checked-casual-shirt/1729391/buy",
        "https://www.myntra.com/tshirts/us-polo-assn/us-polo-assn-men-white-solid-polo-collar-t-shirt/1924803/buy"
    ],

    // Category 2
    [
        "https://www.myntra.com/trousers/nextone/next-one-women-smart-loose-fit-high-rise-easy-wash-parallel-trousers/25243996/buy",
        "https://www.myntra.com/dress/octics/octics-red-embroidery-puff-slevee-midi-dress/35526346/buy",
        "https://www.myntra.com/dresses/allaboutyou/all-about-you-women-self-design-striped-bodycon-maxi-dress/37534714/buy",
        "https://www.myntra.com/dresses/shyamsundari/shyam-sundari-floral-print-puff-sleeve-fit--flare-maxi-dress/37998095/buy",
        "https://www.ebay.co.uk/itm/205366828525"
    ],

    // Category 3
    [
        "https://www.myntra.com/clothing-set/club96/club96-kids-boys-multi-clothing-set/35567059/buy",
        "https://www.myntra.com/clothing-set/kuchipoo/kuchipoo-kids-boys-multi-clothing-set/35969226/buy",
        "https://www.myntra.com/clothing-set/unokids/uno-kids-boys-green-pure-cotton-clothing-set/35661868/buy",
        "https://www.myntra.com/clothing-set/club96/club96-kids-boys-black-clothing-set/35565736/buy",
        "https://www.myntra.com/clothing-set/togepi/togepi-kids-boys-grey-clothing-set/35996332/buy"
    ],

    [
        "https://www.lazada.com.my/tag/bed-sheet-with-2-pillow-case/",
        "https://www.lazada.com.my/tag/bed-sheet-with-2-pillow-case/",
    ],

    [
        "https://www.myntra.com/hair-care-gift-set/arata/arata-unisex-natural-hair-care-set-700-ml/11822452/buy",
    ],

    [
        "https://www.myntra.com/tops/spykar/spykar-black-tropical-print-shirt-style-top/16432314/buy",
        "https://www.myntra.com/skirts/stylecastxslyck/stylecast-x-slyck-flared-maxi-skirt/31358135/buy",
    ]

];

        // Rating counter
        let ratingIndex = 0;

        data.data.forEach((category, Index) => {

            var card = document.createElement("div");
            card.classList.add("card");

            // Sidebar
            var sidebar = document.createElement("div");
            sidebar.classList.add("category-sidebar");

            var titleDiv = document.createElement("div");
            titleDiv.textContent = category.name;
            titleDiv.classList.add("men");

            var img = document.createElement("img");
            img.classList.add("img");
            img.src = category.imgurl;

            

            sidebar.appendChild(titleDiv);
            sidebar.appendChild(img);
            card.appendChild(sidebar);

            // Product list
            var productsList = document.createElement("div");
            productsList.classList.add("products-list");

            var products = category.products.slice(0, 5);

            products.forEach((product, index) => {

                var item = document.createElement("div");
                item.classList.add("products");

                var name = document.createElement("div");
                name.textContent = product.name;
                name.classList.add("product-name");

                var description = document.createElement("div");
                description.innerHTML = product.description;
                description.classList.add("product-description");

                var price = document.createElement("div");
                price.textContent = "RM " + product.regular_price;
                price.classList.add("product-price");
                price.dataset.myr = product.regular_price;

                // Product rating
                var rating = document.createElement("div");

                var ratingProduct = ratingData[
                    ratingIndex % ratingData.length
                ];

                rating.textContent =
                    "⭐ " + ratingProduct.rating.rate + "/5 (" +
                    ratingProduct.rating.count + " ratings)";

                rating.classList.add("product-rating");

                ratingIndex++;

                var buy = document.createElement("button");
                buy.textContent = "Buy";
                buy.classList.add("buy-button", "product-description");

                var addCart = document.createElement("button");
                addCart.textContent = "Add to Cart";
                addCart.classList.add("add-cart-button" , "product-description");

addCart.onclick = function() {
    cart.push(product);
    cartCount++;

    cartDisplay.textContent = "🛒 Cart (" + cartCount + ")";

    console.log(cart);
};

var removeCart = document.createElement("button");
removeCart.textContent = "Remove from Cart";
removeCart.classList.add("remove-cart-button" , "product-description");

removeCart.onclick = function() {
    let cartIndex = cart.indexOf(product);

    if (cartIndex !== -1) {
        cart.splice(cartIndex, 1);
        cartCount--;

        cartDisplay.textContent = "🛒 Cart (" + cartCount + ")";
        console.log(cart);
    }
};




                item.appendChild(name);
                item.appendChild(price);
                item.appendChild(rating);
                item.appendChild(description);

            
var buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");

buttonContainer.appendChild(buy);
buttonContainer.appendChild(addCart);
buttonContainer.appendChild(removeCart);

item.appendChild(buttonContainer);

                buy.onclick = function() {
                    window.location.href = links[Index][index];
                };

                productsList.appendChild(item);
            });

            card.appendChild(productsList);
            container.appendChild(card);

        });

        // Currency converter
        const currencySelect = document.getElementById("currencySelect");

        if (currencySelect) {

            currencySelect.addEventListener("change", function() {

                const currency = currencySelect.value;
                const prices = document.querySelectorAll(".product-price");

                if (currency === "MYR") {

                    prices.forEach(price => {
                        price.textContent = "RM " + price.dataset.myr;
                    });

                    return;
                }

                fetch(`https://api.frankfurter.dev/v2/rate/MYR/${currency}`)
                .then(response => response.json())
                .then(data => {

                    console.log(data);

                    const exchangeRate = data.rate;

                    prices.forEach(price => {

                        const originalPrice = Number(price.dataset.myr);
                        const convertedPrice = originalPrice * exchangeRate;

                        price.textContent = new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: currency
                        }).format(convertedPrice);

                    });

                })
                .catch(error => console.log("Currency Error:", error));

            });

        }

        //------------------------search bar-------------------------//

        const searchBox = document.getElementById("searchBox");

        if (searchBox) {

            searchBox.addEventListener("input", function() {

                const query = searchBox.value.toLowerCase();
                const cards = document.querySelectorAll(".card");

                cards.forEach(function(card) {

                    const products = card.querySelectorAll(".products");
                    let found = false;

                    products.forEach(function(item) {

                        const text = item.textContent.toLowerCase();

                        if (text.includes(query)) {
                            item.style.display = "";
                            found = true;
                        } else {
                            item.style.display = "none";
                        }

                    });

                    card.style.display = found ? "" : "none";

                });

            });

        }

    })
    .catch(error => console.error("Store Error:", error));

})
.catch(error => console.error("Rating Error:", error));
