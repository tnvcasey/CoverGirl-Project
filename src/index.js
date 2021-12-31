document.addEventListener('DOMContentLoaded', () => {
    getList()
    document.getElementById('main-page').addEventListener("click", getList)
    
})
const Base_URL = "http://makeup-api.herokuapp.com"