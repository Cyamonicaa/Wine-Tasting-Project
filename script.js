function changeTheme() {
  let organs = document.querySelector("body");
  organs.classList.toggle("darker");
}
let darkButton = document.querySelector(".dark");
darkButton.addEventListener("click", changeTheme);
function tryWine() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let wine = prompt("What is your favourite wine to drink?");
  if (name === "" || email === "" || wine === "") {
    alert("No wine for you 🥱");
  } else {
    alert(
      "Hello " +
        name +
        " 😎" +
        ", We'll send you a list of wine farms to explore!"
    );
  }
}
let book = document.querySelector(".booking");
book.addEventListener("click", tryWine);
