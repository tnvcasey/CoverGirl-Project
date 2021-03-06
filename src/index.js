document.addEventListener('DOMContentLoaded', () => {
    getList()
    document.getElementById('main-page').addEventListener("click", getList)
    
})
const Base_URL = "http://makeup-api.herokuapp.com"

function getList() {
    const ul = document.getElementById('product-list')
    const makeup = document.getElementById("makeup")
    makeup.innerHTML= ""
    fetch(Base_URL + '/api/v1/products.json?brand=covergirl')
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            ul.innerHTML += `
               <li><a href="#" data-id="${product.id}">${product.name}</a></li>
            `
        })
        listItems(); 
    })
}

const h1 = document.querySelector('h1'); 
h1.style.fontSize = "50px" 

function listItems () {
    const products = document.querySelectorAll('a')
    products.forEach((product) => {
        product.addEventListener('click', summary)
    })
}

function summary (event) {
    const makeup = document.getElementById("makeup")
    const ul = document.getElementById('product-list')
    ul.innerHTML= ''
    fetch(Base_URL + `/api/v1/products/${event.target.dataset.id}.json`)
    .then(res => res.json())
    .then(product => {
        makeup.innerHTML = `<h1>${product.name}</h1>
        <h3>Product Details</h3>
        <p>${product.description}</p>
        <h3>Price</h3>
        <p>${product.price}</p>
        <h3>Product Site</h3>
        <p>${product.product_link}</p>
        <h3>Product Type</h3>
        <p>${product.product_type}</p>`
    })
}


fetch(Base_URL),{
    method: "POST", 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify() 
}
.then(res => res.json)
.then(data => console.log(data))