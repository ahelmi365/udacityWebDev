// Using Fetch() .then()

const {
    del
} = require("express/lib/application");

const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);


fetchPromise.then((res) => {
    return res.json();
}).then((jsonData) => {
    console.log(jsonData[0].name);
}).catch((error) => {
    console.log(error)
})

// fetchPromise.then((res) => {
//     return res.json();
// }).then((resJSON) => {
//     console.log(resJSON[0].name);
//     console.log(resJSON[0].image);
//     console.log(resJSON[0].type);
//     console.log(resJSON[0].price);
// }).catch((error) => {
//     console.log(error)
// })



// =============================================

// Combining multiple promises

// Using Promise.all()

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then(responses => {
        for (const res of responses) {
            console.log(res.url);
            console.log(res.status);
        }
    }).catch(error => {
        console.error(`Failed to fetch: ${error}`)
    })

// Using Promise.any()

const fetchPromise1_1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2_2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3_3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise1_1, fetchPromise2_2, fetchPromise3_3])
    .then(response => {
        console.log(`${response.url}: ${response.status}`);
    })
    .catch(error => {
        console.error(`Failed to fetch: ${error}`)
    });




// ===========   async and await   ================
// Inside an async function 
// you can use the await keyword before a call to a function that returns a promise (like fetch() ). 


// Look at the older way using fetch() and .then()


const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise.then((res) => {
    return res.json();
}).then((jsonData) => {
    console.log(jsonData[0].name);
}).catch((error) => {
    console.log(error)
})

// Unsing async and await
// version 1
async function fetchURL() {
    const res = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
    const resJSON = await res.json();
    console.log(resJSON[0].name)
    // return resJSON;
}
fetchURL()

// version 2 with `try{}` and `catch{}`
async function fetchURL() {
    try {
        const res = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
        const resJSON = await res.json();
        console.log(resJSON[0].name)
        // return resJSON;
    } catch (error) {
        console.log(`${error}`)
    }
}
fetchURL()

// version 3 using the `try{}` and `catch{}` and 
// `if (res.ok) {throw new Error()}`
async function fetchURL() {
    try {
        const res = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`)
        }
        const resJSON = await res.json();
        console.log(resJSON[0].name)
        // return resJSON;
    } catch (error) {
        console.log(`${error}`)
    }
}
fetchURL()

// ================= practice async await ====================

const url = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"


// v1 
async function fetchURL(url) {
    const res = await fetch(url);
    const resJSON = await res.json();
    return resJSON;
}
const dataJSON = fetchURL(url)
dataJSON.then(json => {
    consol.log(json[0].name);
})


// v2 with try catch
async function fetchURL(url) {
    try {
        const res = await fetch(url);
        const resJSON = await res.json();
        return resJSON;
    } catch (error) {
        console.log(error)
    }
}
const dataJSON_2 = fetchURL(url)
dataJSON.then(json => {
    consol.log(json[0].name);
})

// v3 with if(!res.ok){throw new Error()}
async function fetchURL(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`)
        }
        const resJSON = await res.json();
        return resJSON

    } catch (error) {
        console.log(error)
    }

}
const dataJSON_3 = fetchURL(url);
dataJSON_3.then(json => {
    consol.log(json[0].name)
})



// ==================== How to implement a promise-based API ==================

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 1) {
            throw new Error("delay must be positive")
        }
        window.setTimeout(() => {
            resolve(`wakeup ${person}!`)
        }, delay)
    });
}
alarm("Ali", 3000).then(mess => {
    console.log(mess)
});