const API_KEY = "tmNxD4LLLqpyI4nofipBwzD-Z79nZ-IRKOW2W6sQwCs";
//API KEY sildim fect button çalışmadı. Unsplash giriş yaptım bu benim proje API'ım. Bunu yazınca github uyarı veriyor. Nasıl yapmalıyım?

// TODO: Add a new button in HTML to clear the screen

const clearButton = (document.getElementById("image-container").textContent =
  "");

const fetchButton = document.getElementById("fetch-button");
fetchButton.addEventListener("click", function () {
  // TODO: Add an input in HTML (e.g. slider) to select how many new picutres should be fetched. Depending on the user input, the count value in the request should be changed to value selected by user
  fetch(`https://api.unsplash.com/photos/random?count=10&client_id=${API_KEY}`)
    .then((response) => response.json()) //res or response
    .then((data) => {
      // TODO: Add error handling (display error message to the user if an error occurs)
      data.map((imageData) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image-wrapper");
        const imageElement = document.createElement("img");

        imageElement.src = imageData.urls.small;
        imageWrapper.append(imageElement);
        document.getElementById("image-container").append(imageWrapper);
      });
    })
    .catch((error) => console.error("Error fetching images:", error));
});

//Uzun süre ara verince bu ödevi hangi düşünceyle yaptım unutmuşum.
