let addBasket = document.querySelectorAll(".flowersList .item");
if (localStorage.getItem("basket") == null) {
    localStorage.setItem("basket", JSON.stringify([]));
}
for (let itemBasket of addBasket) {
    itemBasket.onclick = function () {
        let basket = JSON.parse(localStorage.getItem("basket"));
        let src = this.children[0].getAttribute("src");
        let name = this.children[1].innerHTML
        let price = this.querySelector(".value").innerHTML;
        let existProduct = basket.find(product => product.Name == name);
        if (existProduct === undefined) {
            basket.push({
                Name: name,
                Src: src,
                Price: price,
                Count: 1
            })
        }
        else {
            existProduct.Count += 1;
        }
        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]));
        }
        localStorage.setItem("basket", JSON.stringify(basket));
        CountProductBasket();
    }
}

function CountProductBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    let sup = document.querySelector("sup");
    sup.innerText = basket.length;
}
CountProductBasket();

let products = JSON.parse(localStorage.getItem("basket"));
let relatedProducts = document.querySelectorAll(".related .item");
let button = document.querySelector(".addToCard  .button input");
for (let itemBasket of addBasket) {
    itemBasket.onclick = function () {
        let src = this.children[0].getAttribute("src");
        let name = this.children[1].innerHTML
        let price = this.querySelector(".value").innerHTML;
        let existProduct = products.find(product => product.Name == name);
        if (existProduct === undefined) {
            products.push({
                Name: name,
                Src: src,
                Price: price,
                Count: 1
            })
        }
        else {
            existProduct.Count += 1;
        }
        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]));
        }
        localStorage.setItem("basket", JSON.stringify(products));
        addToCart();
        CountProductBasket();
    }
}
addToCart(products);
function addToCart() {
    for (let product of products) {
        if (products.length > 0) {
            document.querySelector(".products p").style.display = "none"
        }
        let total = document.querySelectorAll(".total td")[1];
        let table = document.querySelector("table");
        table.style.display = "table"
        let tr = document.createElement("tr");
        let tdImage = document.createElement("td");
        image = document.createElement("img")
        image.setAttribute("src", product.Src);
        tdImage.append(image);
        let name = document.createElement("h6");
        name.innerText = product.Name;
        let price = document.createElement("td");
        price.innerText = product.Count + " X $" + product.Price;
        let about = document.createElement("td");
        about.append(name, price);
        let del = document.createElement("i");
        del.setAttribute("class", "fas fa-times")
        tr.append(tdImage, about, del);

        table.firstElementChild.append(tr);
        let totalprice = Number(total.innerText)
        totalprice = totalprice + Number(product.Count * product.Price);
        total.innerText = totalprice;
        del.onclick = function () {
            let index = products.indexOf(product);
            let sup = document.querySelector("sup");
            sup.innerText = products.length - 1;
            total.innerText = (Number(total.innerText - product.Count * product.Price));
            this.parentElement.remove();
            products.splice(index, 1);
            localStorage.setItem("basket", JSON.stringify(products));
            if (products.length == 0) {
                table.style.display = "none"
                document.querySelector(".products p").style.display = "block";
            }
        }
    }
}

for (let relatedProduct of relatedProducts) {
    relatedProduct.onclick = function () {
        let src = this.children[0].getAttribute("src");
        let name = this.children[1].innerHTML
        let price = this.querySelector(".value").innerHTML;
        let existProduct = products.find(product => product.Name == name);
        if (existProduct === undefined) {
            products.push({
                Name: name,
                Src: src,
                Price: price,
                Count: 1
            })
        }
        else {
            existProduct.Count += 1;
        }
        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]));
        }
        localStorage.setItem("basket", JSON.stringify(products));
        addToCart();
        CountProductBasket();
    }
}
button.onclick = function () {
    addToCart();
    let src = document.querySelector(".orangeAmaryllis .image img").getAttribute("src");
    let name = "Scarlet Sage"
    let price = document.querySelector(".about .heading span.text-muted").innerHTML;
    let existProduct = products.find(product => product.Name == name);
    let count = Number(document.querySelector(".orangeAmaryllis .quantity input").value);
    console.log(count)
    if (existProduct === undefined) {
        products.push({
            Name: name,
            Src: src,
            Price: price,
            Count: count
        })
    }
    else {

        existProduct.Count += count;
    }
    if (localStorage.getItem("basket") == null) {
        localStorage.setItem("basket", JSON.stringify([]));
    }
    CountProductBasket();
}
