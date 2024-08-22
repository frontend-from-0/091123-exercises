const urlParams = new URLSearchParams(window.location.search);//I couldn't figure out the reason to use this two lines
const postId = urlParams.get('postId');


document.addEventListener('DOMContentLoaded' , () => {
fetch('https://jsonplaceholder.typicode.com/posts/' + postId) 
.then(Response=> Response.json())
.then(post => {
    document.getElementById('title').value= post.title;
    console.log ('Original Title :' , post.title);
    document.getElementById('body').value= post.body ;
    console.log ('Original Body :' , post.title);
});

});

let form = document.getElementById("update-post");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const newTitle = document.getElementById('title').value;
    console.log('New Title :', newTitle);

    const newBody = document.getElementById('body').value;
    console.log('New Body :', newBody);

    fetch('https://jsonplaceholder.typicode.com/posts/' + postId,{
        method: 'PATCH',  // POST method is running but gave a error message too. To update data we only use PATCH and PUT. Is it wright?
        body: JSON.stringify({
            title: newTitle,
            body: newBody,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
        .then(responsjson => {
            const successError = document.getElementById('successError');
            successError.textContent='The post updated successfully !';
            console.log(responsjson);
            
        })
        .catch((error) => console.error('Failed updating post:', error));
})

