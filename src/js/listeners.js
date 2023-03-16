import getSearch from "./search";

const answerField = document.querySelector(".answerField");
const form = document.querySelector("form");
const input = form.querySelector("input");
const submitButton = form.querySelector("button");
const errorMessage = form.querySelector(".errorMessage");

const submit = (searchValue) => {
  getSearch(searchValue, [answerField, input]);
  input.value = "";
  input.textContent = "";
  input.disabled = true;
  submitButton.disabled = true;
};

const getListener = () => {
  input.focus();
  let searchValue = "";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submit(searchValue);
  });

  form.addEventListener("keydown", (e) => {
    if (e.key == "Enter") submit(searchValue);
  });

  input.addEventListener("input", (e) => {
    searchValue = e.target.value;
    if (searchValue.length > 2) {
      submitButton.disabled = false;
      errorMessage.textContent = "";
    } else {
      submitButton.disabled = true;
      errorMessage.textContent = "Запрос должен быть длиннее 3-х символов";
    }
  });
};

export default getListener;
