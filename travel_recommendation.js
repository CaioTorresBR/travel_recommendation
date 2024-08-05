const buttonSearch = document.getElementById('searchBtn')
const destinations = []
const searchResultDiv = document.getElementById('searchResult');
const data = href="./travel_recommendation_api.json"

console.log("Data source: ", data)

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