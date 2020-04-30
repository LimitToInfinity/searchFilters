fetch("http://localhost:3000/dogs")
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