const buttonSearch = document.getElementById('searchBtn')
const destinations = []

function search() {
    // retrieves input and converts to lowercase
    const destinationSearch = document.getElementById('destinationInput').value.toLowerCase();
    

}

function recommendationResults() {
    // fetch api data
    fetch('travel_recommendation_api.json')
        .then (response => response.json());
        // handles response in json format
        .then (data => {
            // 
            const = data.
        }
    )