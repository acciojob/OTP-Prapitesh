//your JS code here. If required.

const inputs = document.querySelectorAll(".code");

// focus first input on load
inputs[0].focus();

inputs.forEach((input, index) => {

  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // allow only digits
    if (isNaN(value)) {
      input.value = "";
      return;
    }

    // move focus forward
    if (value !== "" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {

    if (e.key === "Backspace") {

      // if current field is empty, move back
      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = "";
      }
    }
  });

});
