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
            
            const country = data.destination.find(item => item.countries.name.toLowerCase()  === destinationSearch )
            const temple = data.destination.find(item => item.temples.name.toLowerCase() === destinationSearch ) 
            const beach = data.destination.find(item => item.beaches.name.toLowerCse() === destinationSearch )
            
            
        }
    )
}
}

    function resetSearch() {
        document.getElementById("searchResult").value = ""
        document.getElementById("destinationInput").value = ""
    }


searchBtn.addEventListener("click", search);
resetBtn.addEventListener("click", resetSearch);