const inputs = document.querySelectorAll(".code");

// Focus first input on load
inputs[0].focus();

inputs.forEach((input, index) => {

  // Forward typing
  input.addEventListener("input", (e) => {
    if (isNaN(e.target.value)) {
      input.value = "";
      return;
    }

    if (e.target.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  // Backspace logic (KEY FIX)
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      input.value = "";

      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });

});
