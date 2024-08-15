const API_KEY = 'hQxXexpjCejVZJjkdCKHVTx73C_F4V4vLXkNvgT0oVE';

const button = document.getElementById('fetch-button');
const clearButton = document.getElementById("clear-button");

button.addEventListener('click', function () {

  const imageCount = document.getElementById("image-count").value;

  fetch(`https://api.unsplash.com/photos/random?count=${imageCount}&client_id=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        throw new Error('Veri bulunamadı.');
      }

      data.map(imageData => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add('image-wrapper');
        const imageElement = document.createElement("img");

        imageElement.src = imageData.urls.small;
        imageWrapper.append(imageElement);
        document.getElementById("image-container").append(imageWrapper);
      });
    })
    .catch(error => {
      console.error(error);
      const errorMessage = `Hata: ${error.message}`;
      const errorElement = document.createElement("div");
      errorElement.textContent = errorMessage;
      document.getElementById("image-container").append(errorElement);
    });
});

clearButton.addEventListener("click", function () {
  document.getElementById("image-container").innerHTML = "";
});
