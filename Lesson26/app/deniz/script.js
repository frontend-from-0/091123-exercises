// Register on Unsplash to get your own API key
const API_KEY = '3HO6COGJ_0Qsi2DxSVvlppxQBAHZj4jCPBlARAusM3g';

// TODO: Add a new button in HTML to crear the screen

const fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', function () {
  let picCount = parseInt(document.getElementById("pic-count").value) || 10;
  
  if (picCount <= 0) {
    document.getElementById("error-message").textContent = "Please enter a postive number.";
    return;
  }
  // TODO: Add an input in HTML (e.g. slider) to select how many new picutres should be fetched. Depending on the user input, the count value in the request should be changed to value selected by user
  fetch(`https://api.unsplash.com/photos/random?count=${picCount}&client_id=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);  //status text ne anlama geliyor?
      }
      return response.json();
    })
    .then(data => {
      if (data.errors) {
        throw new Error(data.errors[0]); 
      }
      const imageContainer = document.getElementById("image-container");

      // TODO: Add error handling (display error message to the user if an error occurs)
      data.map(imageData => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add('image-wrapper');
        const imageElement = document.createElement("img");

        imageElement.src = imageData.urls.small;
        imageWrapper.append(imageElement);
        imageContainer.append(imageWrapper);

      })
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      document.getElementById('error-message').textContent = 'Error fetching images. Please try again later.';
    });


});

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener('click', function () {
  const imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = "";
})
// iki kere const imageContainer degiskeni kullandim ama sorun olmadi bunuda anlamadim!? sanirim 
// iki farkli scope oldugu icin mi ?
// bu derste zorlandim bakmadan veya yardim almadan yapamiyorum.