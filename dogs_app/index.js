const queryParams = new URLSearchParams(window.location.search);
const searchTerm = queryParams.get("search");

let dogsURL = "http://localhost:3000/dogs";

if (searchTerm) {
    dogsURL = `http://localhost:3000/dogs?search=${searchTerm}`
}

fetch(dogsURL)
    .then(parseJSON)
    .then(displayDogs)

function displayDogs(dogs) {
    dogs.forEach(showDog)
}

function showDog(dog) {
    const dogName = document.createElement("h1");
    dogName.textContent = dog.name;
    document.body.appendChild(dogName);
}

function parseJSON(response) {
    return response.json()
}