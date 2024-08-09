const accordions=document.querySelectorAll(".accordion-item");


accordions.forEach(function(e){
    const button = e.querySelector("button");

button.addEventListener("click", function(){
    const content=e.querySelector(".accordion-hide");
    if (content.style.display === "none") {
            content.style.display = "block";
          } else {
            content.style.display = "none";
          }

});
});

