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
    console.log("Responding from try block");
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};


const add_movie = document.getElementById('add_movie').addEventListener('click', function (e) {

  console.log("Add Movie");
  const movie_title = document.getElementById('movie_name').value;
  const movie_score = document.getElementById('score').value;

  postData("/", {
    'Movie_Name': movie_title,
    'Movie_Score': movie_score
  });

});