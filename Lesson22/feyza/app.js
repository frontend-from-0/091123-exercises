const formElement = document.getElementById("toDoForm");
const formInput = document.getElementById("toDoInput");
const list = document.getElementById("toDoList");

formElement.addEventListener("submit", function (event) {
  // By default, the page is reloded when form is submitted. To avoid it, we need to add `preventDetault()`;
  event.preventDefault();

  // TODO: check that input value has correct format (e.g. minimum 3 chars, no extra spaces)

  const listItem = document.createElement("li");

  const button = document.createElement("button");
  button.innerText = "x";
  button.classList.add("button--light");

  button.addEventListener("click", function () {
    listItem.remove();
  });

  const span = document.createElement("span");
  if (inputValue.length < 3) {
    const inputValue = formInput.value.trim();
    console.log("Please enter at lesat 3 characters.");
    return;
  }
  span.innerText = formInput.value;
  button.addEventListener("click", function () {
    listItem.remove();
  });
  // TODO: Add event listener for click event. When click happens, we need to toggle 'completed' class on the span
  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  listItem.append(span);
  listItem.append(button);

  list.append(listItem);

  console.log(listItem);
  // TODO: Clear input element after everything is done in this function

  formInput.value = "";
});
