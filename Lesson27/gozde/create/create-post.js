const URL = 'https://jsonplaceholder.typicode.com/posts';

// Formun submit olayını işleyerek post oluşturma 
document.getElementById('create-post-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    createPost();
});

// Yeni post oluşturma 
function createPost() {
    const postTitleText = document.getElementById('title-input').value;
    const postBodyText = document.getElementById('body-input').value;

    
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
        document.getElementById('create-post-form').reset(); 
    })
    .catch((error) => {
        console.error('Error:', error); 
        alert('An error occurred while creating the post'); 
    });
}
