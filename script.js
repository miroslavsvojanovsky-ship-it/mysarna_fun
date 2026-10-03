document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  const button = document.getElementById("messageButton");
  const message = document.getElementById("message");

  year.textContent = new Date().getFullYear();

  button.addEventListener("click", () => {
    message.textContent = "Děkuji za kliknutí! JavaScript funguje.";
  });
});
