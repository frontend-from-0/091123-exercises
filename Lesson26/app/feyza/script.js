// Register on Unsplash to get your own API key
const API_KEY = 'tmNxD4LLLqpyI4nofipBwzD-Z79nZ-IRKOW2W6sQwCs';

// TODO: Add a new button in HTML to clear the screen


const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function(){
});
const imageCountSlider = document.getElementById("imageCount");
const sliderValueDisplay = document.getElementById("sliderValue");

function updateSliderValue(value) {
  sliderValueDisplay.textContent = value;
}

const fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', function(){
  // TODO: Add an input in HTML (e.g. slider) to select how many new picutres should be fetched. Depending on the user input, the count value in the request should be changed to value selected by user
  fetch(`https://api.unsplash.com/photos/random?count=10&client_id=${API_KEY}`)
  .then(response => response.json()) //res or response
  .then(data => {
    // TODO: Add error handling (display error message to the user if an error occurs)
    data.map(imageData => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add('image-wrapper');
      const imageElement = document.createElement("img");

      imageElement.src = imageData.urls.small;
      imageWrapper.append(imageElement);
      document.getElementById("image-container").append(imageWrapper);
    }) 
  })
  .catch(error => console.error('Error fetching images:', error));

});

//Burada kafam çok karıştı ve saçma şeyler yaptım gibi. Neyi niçin yaptığımı da anlamadım. ChatGPT de kafamı karıştırdı.