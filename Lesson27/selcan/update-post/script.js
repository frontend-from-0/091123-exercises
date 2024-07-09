const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

document.addEventListener('DOMContentLoaded', function () {
  fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
    .then((response) => response.json())
    .then((post) => {
      document.getElementById('title-input').value = post.title;
      document.getElementById('body-input').value = post.body;
    })
    .catch((error) => console.error('Error:', error));
});

const formElement = document.getElementById('update-post-form');

formElement.addEventListener('submit', function (event) {
  event.preventDefault();

  const postTitleText = document.getElementById('title-input').value;
  console.log('postTitleText', postTitleText);
  const postBodyText = document.getElementById('body-input').value;
  console.log('postBodyText', postBodyText);

  // Valid form input!!!

  fetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
    method: 'PATCH',
    body: JSON.stringify({
      title: postTitleText,
      body: postBodyText
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const successMessage = "Your post was updated succesfully...";
      document.getElementById("message").textContent = successMessage;

      console.log("Your post was updated successfully...");

      const buttonElement = document.createElement("button");
      buttonElement.setAttribute("class", "buttonElement");
      buttonElement.innerText = "Turn to main screen";
      document.body.append(buttonElement);

      buttonElement.addEventListener("click", () => {
        window.location.href = `../index.html?fetch post`;

      });
    })
    .catch((error) => console.error('Error:', error));
});
