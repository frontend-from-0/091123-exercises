document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("create-post-form");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("create-post-title").value;
    const body = document.getElementById("create-post-body").value;

    const postData = {
      title: title,
      body: body,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject("failed to create post");
        }
      })
      .then(function (jsonResponse) {
        console.log("Post created:", jsonResponse);
        displayMessage("Post created successfully!");
      })

      .catch(function (error) {
        console.error("Error:", error);
        displayMessage("Failed to create post!" + error.message);
      });
  });
  function displayMessage(message) {
    message.textContent = message.textContent;
    message.style.display = "block";
  }
});
