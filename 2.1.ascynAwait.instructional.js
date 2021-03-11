/* 
    1. Write a fat arrow async function that does the following:
        - uses await to fetch data from this endpoint - 'https://swapi.co/api/people/<number here>'
        - uses await to jsonify the response received from the fetch
        - console.log's the results of the fetch before console.logging a message saying 'this should print last'
*/


//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let mainUrl = 'https://swapi.co/api/people/3'

let promise = fetch(mainUrl);

fetch(mainUrl)
.then(res => res.json())
.then(json => console.log(json));

function fetchData() {
   fetch(mainURL)
.then(res => res.json())
.then(json => console.log(json));

}

fetchData();

async function fetchData(){
    const response = await fetch(mainURL);
    const json= await response.json(); 
    //console.log('Async/Await: ', json);

    console.log(fetchData('This should print last.'));