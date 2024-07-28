const buttonSearch = document.getElementById('searchBtn')
const destinations = []
const searchResultDiv = document.getElementById('searchResult');



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
            // 
            const destination = data.destination.find(item => item.countries.toLowerCase() === destinationSearch)
        }
    )
}
}

    function resetSearch() {
        document.getElementById("searchResult").value = ""
        document.getElementById("destinationInput").value = ""
    }