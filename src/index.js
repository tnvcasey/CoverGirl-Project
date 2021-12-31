document.addEventListener('DOMContentLoaded', () => {
    getList()
    document.getElementById('main-page').addEventListener("click", getList)
    
})
const Base_URL = "http://makeup-api.herokuapp.com"
function getList() {
    const ul = document.getElementById('product-list')
    const makeup = document.getElementById("makeup")
    
    fetch(Base_URL + '/api/v1/products.json?brand=covergirl')
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            ul.innerHTML += `
               <li><a href="#" data-id ='${product.id}">${product.name}</a></li>
            `
        })
    

const h1 = document.querySelector('h1'); 
h1.style.fontSize = "50px" 

function listItems () {
    const products = document.querySelector('a')
    products.forEach((product) => {
        product.addEventListener("click", summary)
    })
}

function summary (event) {
    console.log(event.target.dataset.id)
    const makeup = document.getElementById('makeup')
    
}
