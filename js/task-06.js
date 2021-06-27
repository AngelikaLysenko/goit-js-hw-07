const validationInput = document.querySelector("#validation-input");
const inputLength = validationInput.dataset.length;
console.log(inputLength);

validationInput.addEventListener("blur", controlOfValidation);
validationInput.addEventListener("focus", clearValidation);

function clearValidation(){
  validationInput.classList.remove("valid");
  validationInput.classList.remove("invalid");
};

function controlOfValidation(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value.length === +inputLength) {
    validationInput.classList.add("valid"); 
  } else {
    validationInput.classList.add("invalid");
  }
};

// const validationInput = document.querySelector('#validation-input');
// const inputLength = validationInput.dataset.length;
// console.log(inputLength);

// const textInput = document.querySelector(".text-input");

// textInput.addEventListener("focus", () => {
//   textInput.value === inputLength;
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });
