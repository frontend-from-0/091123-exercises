window.addEventListener("load", function () {
    const images = document.querySelectorAll(".carousel-container > img");
    const indicators = document.getElementsByClassName("indicator");
    console.log(images, indicators);
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    let activeSlide = 0;
//I can't create all the files myself yet. So I did it by watching the lesson video.    

    function showImage() {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("active");
            indicators[i].classList.remove("active");
        }
        console.log("active slide: ", activeSlide);
        images[activeSlide].classList.add("active");
        indicators[activeSlide].classList.add("active");

    }

    prevButton.addEventListener("click", showPrevImage);
    nextButton.addEventListener("click", showNextImage);
   
    function showNextImage() {
        if (activeSlide < images.length - 1) {
          activeSlide++;
        } else {
          activeSlide = 0;
        }
    
        showImage();
      }


      function showPrevImage() {
        if (activeSlide > 0) {
          activeSlide--;
        } else {
          activeSlide = images.length - 1;
        }
        showImage();
      }

      setInterval(showNextImage, 2500);
    
});