// Register on Unsplash to get your own API key
const API_KEY = 'pXIKvYxihg7hFPoVFY2AyaW13XFaSAqrD47sG35W6TI';

// TODO: Add a new button in HTML to crear the screen
document.addEventListener('DOMContentLoaded', () => {
  const clearButton = document.getElementById('clear-screen');
  const fetchButton = document.getElementById('fetch-button');
  const slider = document.getElementById('slider');
  const pictureCount = document.querySelector('.pic-count'); 

  function clearScreen() {
    imageContainer.innerHTML = '';
}

  slider.addEventListener('input', () => {
      pictureCount.textContent = slider.value; 

    });

  // TODO: Add an input in HTML (e.g. slider) to select how many new picutres should be fetched. Depending on the user input, the count value in the request should be changed to value selected by user
  fetchButton.addEventListener('click', () => {
      const count = slider.value;
      showPictures(count);
  });

  // Handle the button click to clear the screen
  clearButton.addEventListener('click', () => {
      clearScreen();
  });

  // Function to fetch pictures from Unsplash API
  function showPictures(count) {
      fetch(`https://api.unsplash.com/photos/random?count=${count}&client_id=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        // TODO: Add error handling (display error message to the user if an error occurs)

          const dataInputError = document.getElementById('dataError');
              if (data.errors) {
          		dataInputError.textContent = 'Something is wrong, Please try again.';
            
            } else {
          displayPictures(data);
          dataInputError.textContent = '';
          	}
      })
      .catch(error => console.error(error));

  }
  
  const imageContainer = document.getElementById('image-container');
  function displayPictures(pictures) {
      imageContainer.innerHTML = ''; 
      pictures.forEach(imageData => {
          const imageWrapper = document.createElement('div');
          imageWrapper.classList.add('image-wrapper');
          const imageElement = document.createElement('img');
          
          imageElement.src = imageData.urls.small;
          imageWrapper.append(imageElement);
          imageContainer.append(imageWrapper);
      });
  }

});


