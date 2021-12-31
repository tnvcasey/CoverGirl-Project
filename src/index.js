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
               <li>${product.name}</a></li>
            `
        })