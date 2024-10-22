
let vari = ["#card-title" , "#card-profession", "#card-button" ]

// Fetch the local JSON file
fetch('output.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON data
    })
    .then(data => {


        console.log(data[0].name);
        document.querySelectorAll('.card__title')[0].textContent=data[0].name
       
       
       

       
    })
    .catch(error => console.error('Error fetching the JSON file:', error));



let cardContainer=(document.querySelector('.me__card').innerHTML);

let div = document.createElement('div').innerHTML= cardContainer


let meCard = document.querySelector('.me__card').innerHTML+= div ;


// console.log('finish');









console.log("hii!")

