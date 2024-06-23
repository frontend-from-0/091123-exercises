/* 
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method
Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response. 
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/

const URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchAllPosts = document.getElementById('fetch-button');
fetchAllPosts.addEventListener('click', getPosts);

function getPosts() {
	fetch(URL)
		.then((response) => response.json())
		.then((response) => {
			response.map((post) => {
				const title = document.createElement('h2');
				title.innerText = post.title;

				const paragraph = document.createElement('p');
				paragraph.innerText = post.body;

				const updateButton = document.createElement('a');
				updateButton.setAttribute('id', 'update-button');
				updateButton.setAttribute('class', 'button button--success');
				updateButton.innerText = 'Update Post';
        updateButton.href = `http://127.0.0.1:5502/Lesson27/update/update-post.html?postId=${post.id}`;

		        const deleteButton=document.createElement('a');
				deleteButton.setAttribute("id","delete-button");
				deleteButton.setAttribute("class","button button--danger");
				deleteButton.innerText="Delete Post";
				deleteButton.href=`http://127.0.0.1:5502/Lesson27/delete/date/delete-post.html?postId=${post.id}`;


				const listItem = document.createElement('li');
				listItem.append(title);
				listItem.append(paragraph);
				listItem.append(updateButton);
				listItem.append(deleteButton);
				document.getElementById('posts-list').append(listItem);
			});
		});
}

const fetchOnePosts = document.getElementById('fetch-one-button');
fetchOnePosts.addEventListener('click', getPostById(postId));

function getPostById(postId) {
	fetch(URL)
	.then(response=>{
		if(!response.ok){
			throw new Error('Ağ yaniti düzgün değildi');
		}
		return response.json();
	})
	.then(post=>{
		const postContainer=document.createElement("div");
		postContainer.innerHTML="";

		const title=document.createElement("h2");
		title.innerHTML=post.title;

		const paragraph=document.createElement("p");
		paragraph.innerText=post.body;

		postContainer.append(title);
		postContainer.append(paragraph);

		document.getElementById("fetch-one-button").append(postContainer);
	})
	.catch(error=>{
		console.error('Hata:', error)
	});
}

// TODO: move this to the script file attached to the create-post.html page
function createPost() {
	fetch(URL)
	.then((response)=>response.json())
	.then((post)=>{
		const title=document.createElement("h2");
		title.innerHTML=post.title;
		
		const paragraph=document.createElement("p");
		paragraph.innerText=post.body;
		
		const postContainer=document.createElement("div");
	    postContainer.innerHTML="";

        postContainer.append(title);
	    postContainer.append(paragraph);

		document.getElementById("create-button").append(postContainer);
	})
	
		.catch((error) => console.error('Error:', error));
}


function deletePost() {
	const title=document.createElement("h2");
	title.innerHTML=post.title;
	
	const paragraph=document.createElement("p");
	paragraph.innerText=post.body;
	
	const postContainer=document.createElement("div");
	postContainer.innerHTML="";

	postContainer.append(title);
	postContainer.append(paragraph);

	document.getElementById("delete-button").append(postContainer);
}
