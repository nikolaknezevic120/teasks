function getCountry() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const geocodeUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

    fetch(geocodeUrl)
        .then(response => response.json())
        .then(data => {
            const country = data.countryName;

            sessionStorage.setItem('country', country);

            document.getElementById('country').textContent = `Your ountry is: ${country}`;
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

function errorCallback(error) {
    console.log("Error:", error.message);
    document.getElementById('country').textContent = "Error: " + error.message;

}

getCountry();