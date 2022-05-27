/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const APIKEY = "b2d59b02c038df9f6951f8925559969e&units=imperial"

const generate = document.querySelector('#generate');

generate.addEventListener('click', getWeatherData)

async function getWeatherData() {

    const zipCode = document.querySelector('#zip').value;
    if (!zipCode) {
        alert("Please enter a valid Zipcode!");
        return
    }
    const feeling = document.querySelector('#feelings').value;

    const fullURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${APIKEY}`
    try {
        const res = await fetch(fullURL);
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`)
        }
        const resJSON = await res.json();
        console.log(resJSON.main.temp);
        console.log(feeling);

        return resJSON.main.temp

    } catch (error) {
        console.log(error)
    }

}