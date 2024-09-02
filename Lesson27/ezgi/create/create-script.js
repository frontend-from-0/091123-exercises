
document.addEventListener('DOMContentLoaded', function () {

    const form= document.getElementById('create-post');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const newTitle = document.getElementById('title').value;
        console.log(newTitle);
        const newBody = document.getElementById('body').value;
        console.log(newBody);


        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: newTitle,
                body: newBody
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => {
                if (response.ok) {
                    const successError = document.getElementById('successError');
                    successError.textContent = 'New post created successfully!';
                    return response.json();
                } else {
                    successError.textContent = 'Failed the upload! Please try again.';
                }
            }).catch(function (error) {
                console.error('Error:', error);
                successError.textContent = 'Failed the upload! Please try again.';
            })
    })

})