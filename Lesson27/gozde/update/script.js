const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

document.addEventListener('DOMContentLoaded', function() {
    
    fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
  .then((response) => response.json())
  .then((post) => {
    document.getElementById('title-input').value = post.title;
    document.getElementById('body-input').value = post.body;
    
  })
})

//  TODO: 1. Fetch post data for the post with given postId
// 2. Prefill form with post title and post body
// 3. Select form element and attache 'submit' event listener to it, send new post information with UPDATE request
// 4. Show confirmation to the user if update operation was successful

const formElement = document.getElementById('update-post-form');

formElement.addEventListener('submit', function(){
    event.preventDefault();

    const postTitleText = document.getElementById('title-input').value;
    console.log('postTitleText', postTitleText);
    
    const postBodyText = document.getElementById('body-input').value;
    console.log('postBodyText', postBodyText);

    // Valid form input!

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
          console.log(json);
          alert('Post updated successfully');
})
.catch((error) => {
  console.error('Error:', error);

  alert('An error occured while updating the post');
});
});
