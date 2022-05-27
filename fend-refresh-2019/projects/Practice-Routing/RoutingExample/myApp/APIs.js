// Here is the client side code that would make a GET request to the new_query info API:
// const baseURL = "https://api.nasa.gov/planetary/apod?api_key=";
// const apiKey = "0JEymXJ1FBKQtMmYINpMLQpGbTLpprad3McDEKwv";

// document.getElementById("generate").addEventListener("click", getNASAData2);

// function runQuery(e) {
//   const new_query = document.getElementById("query_name").value;
//   getNASAData2(baseURL, new_query, apiKey);
// }
// const getNASAData = async (baseURL, query_name, key) => {
//   const res = await fetch(baseURL + key);
//   try {
//     const data = await res.json();
//     // console.log(res);
//     console.log(data[query_name]);
//     data[query_name]
//       ? (document.getElementById(
//           "query-data"
//         ).value = `${query_name.toUpperCase()}: ${data[query_name]}`)
//       : (document.getElementById("query-data").value =
//           "Nothing to show, please enter a valid data above.");
//     return data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// const getNASAData2 = async (baseURL, query_name, key) => {
//   const res = await fetch(baseURL + key);
//   try {
//     const data = await res.json();
//     console.log(data[query_name]);
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// const url = "https://api.nasa.gov/planetary/apod?api_key=";
// const api_key = "0JEymXJ1FBKQtMmYINpMLQpGbTLpprad3McDEKwv";

// document.getElementById("generate").addEventListener("click", runQuery3);

// function runQuery3(e) {
//   const new_query = document.getElementById("query_name").value;
//   getNASAData3(url, new_query, api_key);
// }

// const getNASAData3 = async (url, new_query, api_key) => {
//   const res = await fetch(url + api_key);
//   const data = await res.json();

//   console.log(data);
//   console.log(data[new_query]);
// };

// const url = "https://api.nasa.gov/planetary/apod?api_key=";
// const api_key = "0JEymXJ1FBKQtMmYINpMLQpGbTLpprad3McDEKwv";

// const query_data_btn = document.getElementById("generate");

// query_data_btn.addEventListener("click", function (e) {
//   getNASAData(url, api_key);
// });

// async function getNASAData(url, api_key) {
//   const new_query = document.getElementById("query_name").value;
//   const res = await fetch(url + api_key);
//   try {
//     const json_data = await res.json();
//     console.log(json_data[new_query]);
//     return json_data;
//   } catch (err) {
//     console.error(err);
//   }
// }

const nasa_url = "https://api.nasa.gov/planetary/apod?api_key=";
const nasa_api_key = "0JEymXJ1FBKQtMmYINpMLQpGbTLpprad3McDEKwv";

const query_btn = document.getElementById("generate");

query_btn.addEventListener("click", function (e) {
    // call the async function here
    getNASADATAPlease(nasa_url, nasa_api_key);
});

async function getNASADATAPlease(nasa_url, nasa_api_key) {
    const nasa_new_query = document.getElementById("query_name").value;

    const nasa_res = await fetch(nasa_url + nasa_api_key);
    try {
        const nasa_data = await nasa_res.json();
        console.log(nasa_data[nasa_new_query]);
        return nasa_data;
    } catch (err) {
        console.warn(err);
    }
}