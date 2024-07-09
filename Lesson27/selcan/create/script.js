// URL of the JSONPlaceholder API
const URL = 'https://jsonplaceholder.typicode.com/posts';
const formPost = document.getElementById('createPostForm');

formPost.addEventListener('submit', function (event) {
  event.preventDefault();
  createPost();

});

isFormCorrect = true;

function createPost() {
  const titleText = document.getElementById("titleInput").value;
  const bodyText = document.getElementById("bodyInput").value;

  fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      title: titleText,
      body: bodyText
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      console.log("Başari ile kaydedildi.");

      const successMessage = "Your post was created succesfully...";
      document.getElementById("message").textContent = successMessage

      const buttonElement = document.createElement("button");
      buttonElement.setAttribute("class", "buttonElement");
      buttonElement.innerText = "Turn to main screen";
      document.body.append(buttonElement);

      buttonElement.addEventListener("click",() =>{
      window.location.href = `../index.html?fetch post`;
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });



};


