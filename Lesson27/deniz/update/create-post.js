document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('create-post-form');
    const messageElement = document.getElementById('message'); 

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('create-title-post').value;
        const body = document.getElementById('create-body-post').value;

        const postData = {
            title: title,
            body: body
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject('Failed to create post');
            }
        })
        .then(function (jsonResponse) {
            console.log('Post created:', jsonResponse);
            displayMessage('Post created successfully!');
        })
        .catch(function (error) {
            console.error('Error:', error);
            displayMessage('An error occurred while updating the post: ' + error.message);  // Hata mesajını göster
        });
    });

    function displayMessage(message) {
        messageElement.textContent = message;
        messageElement.style.display = 'block';
    }
});
