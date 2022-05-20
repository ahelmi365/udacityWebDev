// code we could use to make a POST request to our route:
const postData = async (url = "", data = {}) => {
  console.log(data);

  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// postData("/", { Name: "Ali", Age: 35 });
// postData("/", { Name: "Tah", Age: 51 });
// postData("/", { Name: "Muhammed", Age: 45 });

// //////////////////////////////////////////////////////////////

// Here is the client side code that would make a GET request to the new_query info API:
let baseURL = "https://api.nasa.gov/planetary/apod?api_key=";
let apiKey = "0JEymXJ1FBKQtMmYINpMLQpGbTLpprad3McDEKwv";

document.getElementById("generate").addEventListener("click", performAction);

function performAction(e) {
  const new_query = document.getElementById("query_name").value;
  getNasaData(baseURL, new_query, apiKey);
}

const getNasaData = async (baseURL, quer_name, key) => {
  const res = await fetch(baseURL + key);
  try {
    const data = await res.json();
    // console.log(data);
    console.log(data[quer_name]);
    data[quer_name]
      ? (document.getElementById(
          "query-data"
        ).value = `${quer_name.toUpperCase()}: ${data[quer_name]}`)
      : (document.getElementById("query-data").value =
          "Nothing to show, please enter a valid data above.");
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// const getNasaData2 = async(baseURL, a);
