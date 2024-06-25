// Register on Unsplash to get your own API key
const API_KEY = 'hQxXexpjCejVZJjkdCKHVTx73C_F4V4vLXkNvgT0oVE';

// TODO: Add a new button in HTML to clear the screen

const button = document.getElementById('fetch-button');
const clearButton=document.getElementById("clear-button");

button.addEventListener('click', function(){
  // TODO: Add an input in HTML (e.g. slider) to select how many new picutres should be fetched. Depending on the user input, the count value in the request should be changed to value selected by user

  const imageCount=document.getElementById("image-count").value;

  fetch(`https://api.unsplash.com/photos/random?count=10&client_id=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    if(data !== -1){
      throw new Error('Ağ yaniti düzgün değil.');
    }else{
    // TODO: Add error handling (display error message to the user if an error occurs)
    data.map(imageData => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add('image-wrapper');
      const imageElement = document.createElement("img");

      imageElement.src = imageData.urls.small;
      imageWrapper.append(imageElement);
      document.getElementById("image-container").append(imageWrapper);
    }) }
  })
  .catch(error => console.error(error)); 
  const errorMessage ="Hata:${error.message}";
  document.getElementById("image-container").append(errorMessage);  
});
clearButton.addEventListener("click",function()){
  document.getElementById("image-container").innerHTML=" ";
  }