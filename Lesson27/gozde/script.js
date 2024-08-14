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
				updateButton.innerText = 'Update post';
                updateButton.href = `./update/update-post.html?postId=${post.id}`;


		        const deleteButton = document.createElement('button');
				deleteButton.setAttribute('class', 'button button--danger');
				deleteButton.innerText = 'Delete post';
				deleteButton.addEventListener('click', () => deletePost(post.id));

				const listItem = document.createElement('li');
				listItem.append(title);
				listItem.append(paragraph);
				listItem.append(updateButton);
				listItem.append(deleteButton);
				document.getElementById('posts-list').append(listItem);
			});
		});
}

function getPostById(postId) {
	fetch(`${URL}/${postId}`)
	.then ((response) => responde.json())
	.then((post) => {
		const title = document.createElement('h2');
		title.innerText = post.title;

		const paragraph = document.createElement('p');
		paragraph.innerText = post.body;

		document.getElementById('post-details').append(title, paragraph);
	})
	.catch((error) => console.error('Error:', error));
}
// TODO: move this to the script file attached to the create-post.html page
function createPost() {
	const postTitleText = document.getElementById('title-input').value;
    const postBodyText = document.getElementById('body-input').value;
	const createButton = document.createElement('a');
	createButton.setAttribute('id', 'create-button');
    createButton.innerText = 'Create post';

    fetch(URL, {
        method: 'POST',
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
        console.log('Post created:', json);
        alert('Post created successfully');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while creating the post');
    });
}


function deletePost(postId) {
console.log('Post id ', postId);
fetch(`${URL}/${postId}`, {
	method: 'DELETE',
})
.then(() => {
	alert('Post deleted successfully');
	const listItem = document.querySelector(`li[data-id='${postId}']`);
	if (listItem) {
		listItem.remove();
	}
})
.catch((error) => {
	console.error('Error:', error);
	alert('An error occurred while deleting the post');
});
}



