// URL of the JSONPlaceholder API
const URL = 'https://jsonplaceholder.typicode.com/posts';
const formPost = document.getElementById('createPostForm');

formPost.addEventListener('submit', function (event) {
	event.preventDefault();
createPost();

});

isFormCorrect=true;
function createPost() {
const titleText = document.getElementById("titleInput").value;
const bodyText = document.getElementById("bodyInput").value;

fetch(URL,{
    method:"POST",
    body:JSON.stringify({
        title:titleText,
        body:bodyText
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
        .then((json) =>{ 
          console.log(json);
        console.log("Başari ile kaydedildi.");
       })
        .catch((error) => {
          console.error('Error:', error);
     
    });
  } 
  if(isFormCorrect) {
    document.getElementById(success-container).remove("hidden");
    document.getElementById(container).add.classList("hidden")
  }

