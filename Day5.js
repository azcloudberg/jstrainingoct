console.log("conn")

// What an API is?
// Application Programming Interface

// Request - A user will send an API request.
// Endpoints - www.vamsi.com/user
// www.vamsi.com/search
// www.vamsi.com/post

// Methods - 

// GET: Retrieves the data from the server (Searching user -> User list)
// POST: Submits new data to the server. (Adding a new post on Instagram, creating a new user, Adding a new tweet)
// PUT: Updating existing elements -> (Updating profile picture, updating caption of an image)
// DELETE:  It deletes the data (deleting story, post, user, )
// Response - 
// When we send a request to server, it process the request sends back a response either in json, xml.

// Promises 

// let pizzaOrder = new Promise ((resolve, reject) => {
//     let pizzaAvail = false;
//     if(pizzaAvail){
//         resolve("Your pizza has been delivered");
//     }else{
//         reject("Sorry, we ran out of pizza");
//     }
// });

// pizzaOrder.then((message) => {
//     console.log(message);
// }).catch((err) => {
//     console.log(err);
// });


// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const success = false;
//             if(success){
//                 resolve("Data Fetched Success");
//             }
//             else{
//                 reject("Error fetching data");
//             }
//         },2000);
//     });
// }

// async function fetchDataAsync(){
//     try{
//         let data = await fetchData();
//         console.log(data); //runs if the promise is resolves
//     }catch (error){
//         console.log(error); //runs if the promise is rejected
//     }
// }

// fetchDataAsync();
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// fetch(API_URL)
// .then(response => {
//     if(!response.ok){
//         throw new Error("Network Error");
//     }
//     return response.json();
// })
// .then(data => {
//     console.log(data[0]);
// }).catch(error => {
//     console.error('Error access your request', error);
// })
async function fetchPost() {
    try{
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error('Network Error');
        }
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.error(err);
    }
}

fetchPost();

