/*const buttonSearch = document.getElementById('searchBtn')
const destinations = []
const searchResultDiv = document.getElementById('searchResult');
const data = href="./travel_recommendation_api.json"

console.log("Data source: ", data)*/

// fetching data
async function fetchTravelData() {
    try {
        const response = await fetch('travel_recommendation_api.json');
        const data = await response.json();
        console.log('Fetched data: ', data); // logs the fetched data
        return data;
    }
    catch (error) {
        console.error("Error fetching travel data:", error);
        throw error
    }
}

// parsing and dispaying the data
function displayTravelData(cities) {
    console.log('Countries Data: ', countries); // logs countries data
    const resultsContainer = document.getElementById("searchResult");



    // clears previous results
    resultsContainer.innerHTML = '';

    if (!Array.isArray(countries)) {
        console.error('Expected an array of countries, but got: ', countries);
        return;
    }

    countries.forEach(country => {
        if (country.name != destinationName) {
            return
        } 


        if (!Array.isArray(country.cities)) {
            console.error('Expected an array of citie for country:', country);
            return;
        }


        country.cities.forEach(city => {
            // creates a container for each city
            const cityContainer = document.createElement('div');
            cityContainer.classList.add('city');
    
            // creates an image element
            const img = document.createElement('img');
            img.src = city.imageUrl; // Ensures JSON contains correct image URL
            img.alt = city.name;
    
            // creates a description element
            const description = document.createElement('p');
            description.textContent = city.description; // ensures JSON contains correct description
    
            // appends image and description to the place container
            cityContainer.appendChild(img);
            cityContainer.appendChild(description);
    
            // appends place container to the results container
            resultsContainer.appendChild(cityContainer);
        })
    })     
}

// handle search button click
// (adds event listener to the search button)
document.getElementById('searchBtn').addEventListener('click', async () => {
    const input = document.getElementById("destinationInput");
    const destinationType = input.value;
    const jsonData = await fetchTravelData();
    displayTravelData(jsonData[destinationType]);
});

/*
function recommendationResults() {

    function search() {
    // retrieves input and converts to lowercase
        const destinationSearch = document.getElementById('destinationInput').value.toLowerCase();
        destinationSearch.innerHTML = "";
    
    // fetch api data

    fetch('travel_recommendation_api.json')

        .then (response => response.json())
        // handles response in json format
        .then (data => {
            // search keywords and their match on json document
            const country = data.destination.find(item => item.countries.name.toLowerCase()  === destinationSearch );
            const temple = data.destination.find(item => item.temples.name.toLowerCase() === destinationSearch );
            const beach = data.destination.find(item => item.beaches.name.toLowerCase() === destinationSearch );



            if (country) {
                searchResultDiv.innerHTML += 
                `<h2>Meet ${country.name}!</h2>
                <h3>Cities</h3>
                <h4>${country.name.cities.name[0]}</h4>
                <img src="${country.name.cities.imageUrl[0]}">
                <p>${country.name.cities.description[0]}</p>`
            }
        })

        .catch(error => {
           console.error("Error: ", error);
           searchResultDiv.innerHTML += "An error occured during the fecthing process" 
        })

        }
        }


    function resetSearch() {
        document.getElementById("searchResult").value = ""
        document.getElementById("destinationInput").value = ""
    }


searchBtn.addEventListener("click", recommendationResults);
resetBtn.addEventListener("click", resetSearch);
*/