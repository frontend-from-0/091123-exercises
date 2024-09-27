// Register on Unsplash to get your own API key
const API_KEY = 'Cfi-4ca4RWcYH41DWRwhBV77C_m6BYZ3S-cBaX2VlSc';

// TODO: Add a new button in HTML to crear the screen
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const pictureCount = document.querySelector('.picture-count'); 
  const fetchButton = document.getElementById('fetch-button');
  const clearButton = document.getElementById('clear-screen');
  const imageContainer = document.getElementById('image-container');

  // Update the displayed count value when the slider changes
  slider.addEventListener('input', () => {
      pictureCount.textContent = slider.value; // Updating the span content
  });

  // TODO: Add an input in HTML (e.g. slider) to select how many new picutres should be fetched. Depending on the user input, the count value in the request should be changed to value selected by user
  fetchButton.addEventListener('click', () => {
      const count = slider.value;
      fetchPictures(count);
  });

  // Handle the button click to clear the screen
  clearButton.addEventListener('click', () => {
      clearScreen();
  });

  // Function to fetch pictures from Unsplash API
  function fetchPictures(count) {
      fetch(`https://api.unsplash.com/photos/random?count=${count}&client_id=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        // TODO: Add error handling (display error message to the user if an error occurs)
          if (!Array.isArray(data)) {
              console.error('Error fetching pictures:', data);
              alert('Error fetching pictures. Please try again.');
              return;
          }
          displayPictures(data);
      })
      .catch(error => {
          console.error('Error fetching pictures:', error);
          alert('Error fetching pictures. Please try again.');
      });
  }

  // Function to display fetched pictures
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

  // Function to clear the screen
  function clearScreen() {
      imageContainer.innerHTML = '';
  }
});
