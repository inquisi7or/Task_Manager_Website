const dateInput = document.querySelector(".date-input");

function home(){
    window.location.href = "./home_page.html";
}

dateInput.addEventListener("input", (e) => {
    dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
    if (dateInput.value.length === 2) {
      dateInput.value += "/";
    }
    if (dateInput.value.length === 5) {
        dateInput.value += "/";
      }
    if (dateInput.value.length > 10) {
      dateInput.value = dateInput.value.slice(0, 10);
    }
    if (e.inputType === "deleteContentBackward") {
      if (dateInput.value.length === 3) {
        dateInput.value = dateInput.value.slice(0, 2);
      }
    }
  });