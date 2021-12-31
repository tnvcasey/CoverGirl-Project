# CoverGirl-Project
Web app with fetch requests from public API. 

Welcome to my first README!

This web app is built to fetch information from a public api that has 54 CoverGirl Makeup products and things about them.  

The app uses a funciton with an event lister telling JavaScript to wait for the DOM to load until it starts any of its activities. This avoids anything being started before the document is fully loaded. 

This site uses fetch() to send a request to a public API and receives a promise in return from the API. Once the API has given back a response that has worked, the response will be converted to a JSON readable text. 

This first fetch is within a function the will create a list item for every one of the products when they are returned from from the API. Each of the 54 list item is then given a link that has an event listener that listens for the user to click. Once the user clicks the link it will take you to the specific product page that has a brief product summary (summary, price, URL.) All of this info has come from the public api. 

The summary function also calls a fetch and receives information for each product based on the product ID. HTML tags were inserted into the summary function so that each product could be given a description, price, and the url that can take you to the page for the specific product. 

At the top of the page there is a button that has been created to take the user back to the main page (the unordered list of list item products.) The button has an event listener added to it that listens for the “click” and continues on the above mentioned function. 