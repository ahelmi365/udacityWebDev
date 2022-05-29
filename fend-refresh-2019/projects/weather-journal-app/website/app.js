// Global variables

let d = new Date();
let todayDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
const APIKEY = "b2d59b02c038df9f6951f8925559969e&units=imperial";
const resultDiv = document.getElementById("results");

document.getElementById("generate").addEventListener("click", runWeatherGetter);

function runWeatherGetter(e) {
    const zipCode = document.querySelector("#zip").value;
    if (!zipCode) {
        resultDiv.style.display = "none"; // hide the result section
        alert("Please enter a valid Zipcode!");
        return;
    }

    let fullURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${APIKEY}`;
    const feeling = document.querySelector("#feelings").value;

    getWeatherData("/getWeatherData", fullURL).then(function (
        dataFromgetWeatherData
    ) {
        postData("/addData", {
            temp: dataFromgetWeatherData.main.temp ?
                dataFromgetWeatherData.main.temp : "",
            feeling: feeling ? feeling : "",
            date: todayDate,
        });
        updateWeatherUI("/UpdateUI");
    });
}

// function to hit the rout "/getWeatherData"
async function getWeatherData(url = "/getWeatherData", fullURL) {
    const res = await fetch(fullURL);
    // const res = await fetch('/fakeAnimalData')
    try {
        const data = await res.json();
        console.log("data from getWeatherData");
        console.log(data);
        if (data.cod == "404") {
            //if the entered zipcode is not valid
            resultDiv.style.display = "none"; // hide the result section
            alert("Please enter a valid ZipCode!");
            return;
        } else return data;
    } catch (error) {
        // appropriately handle the error
        console.log("error", error);
    }
}

// function to hit the rout "/addData"
async function postData(url = "/addData", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log("newData from postData");
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

// function to hit rout "/updateWeatherUI" and update the UI
async function updateWeatherUI() {
    resultDiv.style.display = "block"; // show the result section
    const request = await fetch("/UpdateUI");
    try {
        const allData = await request.json();

        document.getElementById("temp").textContent =
            "Temp: " + Math.round(allData.temp) + " degrees";
        allData.feeling ?
            (document.getElementById("content").textContent =
                "Feeling is: " + allData.feeling) :
            "";
        document.getElementById("date").textContent = "Today is: " + allData.date;
    } catch (error) {
        console.log("error", error);
    }
}