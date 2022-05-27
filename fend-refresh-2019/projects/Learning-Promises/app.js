const dataObject = {
    name: "",
    price: "",
    image: "",
    type: "",
};

// const runQuery = document.getElementById("generate");
// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// runQuery.addEventListener("click", function (e) {
//     const queryIndex = Number(document.getElementById("query_name").value);
//     console.log(queryIndex);
//     try {
//         fetchPromise.then((res) => {
//             const resJSON = res.json();
//             resJSON.then((resData) => {
//                 dataObject.name = resData[queryIndex].name;
//                 dataObject.price = resData[queryIndex].price;
//                 dataObject.image = resData[queryIndex].image;
//                 dataObject.type = resData[queryIndex].type;
//                 console.table(dataObject);
//             });
//         });
//     } catch (error) {
//         console.log(error);
//     }
// });

const runQuery = document.getElementById("generate");
const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

const resJSON = fetchPromise.then((res) => {
    if (!res.ok) {
        throw new error(`HTTP error: ${res.status}`)
    }
    return res.json();
}).catch((error) => {
    console.log(error)
})

runQuery.addEventListener("click", function (e) {
    const queryIndex = Number(document.getElementById("query_name").value);
    // fetchPromise.then((res) => {
    //     return res.json();
    // }).then((jsonData) => {
    //     console.log(jsonData[queryIndex].name);
    // }).catch((error) => {
    //     console.log(error)
    // })

    resJSON.then((resData) => {
        console.log(`This is result of index ${queryIndex}:`)
        console.log(resData[queryIndex].name);
        console.log(resData[queryIndex].image);
        console.log(resData[queryIndex].type);
        console.log(resData[queryIndex].price);
    }).catch((error) => {
        console.log(error)
    })
});