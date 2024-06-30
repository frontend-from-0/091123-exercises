// URL of the JSONPlaceholder API
const URL = 'https://jsonplaceholder.typicode.com/posts';
function createPost(postId){
    fetch(URL + post.id)
    .then((response) => response.json())
    .then((post) => {
    document.getElementById('titleInput').value = post.title;
    document.getElementById('bodyInput').value = post.body;
  });


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
        .then((json) => console.log(json));

        window.location.href = "create-post.html";
};
const formPost = document.getElementById('createPostForm');


formPost.addEventListener('submit', function (event) {
	event.preventDefault();
createPost(postId);
  

document.getElementById("create-button").addEventListener("click",createPost);
});