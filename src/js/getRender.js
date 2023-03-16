import getDate from "./getDate";

const renderCell = ({ name, html_url, created_at, language, owner }, tbody) => {
  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  const dateElem = document.createElement("p");
  dateElem.textContent = getDate(new Date(created_at));
  td1.append(dateElem);

  const td2 = document.createElement("td");
  const personElem = document.createElement("p");
  personElem.textContent = owner.login;
  td2.append(personElem);

  const td3 = document.createElement("td");
  const linkElem = document.createElement("a");
  linkElem.href = html_url;
  linkElem.textContent = name;
  linkElem.target = "_blank";
  td3.append(linkElem);

  const td4 = document.createElement("td");
  const languageElem = document.createElement("p");
  languageElem.textContent = language;
  td4.append(languageElem);

  tr.append(td1, td2, td3, td4);

  tbody.append(tr);
};

const getRender = (answer, fields) => {
  const [answerField, input] = fields;
  if (answer === null) {
    answerField.className = "errorAnswer";
    answerField.textContent =
      "Неизвестная ошибка, попробуйте повторить запрос позже";
  }
  if (answer.total_count == 0) {
    answerField.className = "errorAnswer";
    answerField.textContent = "Ничего не найдено";
  } else {
    answerField.className = "answerField";
    answerField.textContent = "";
    const lists = answer.items;
    const table = document.createElement("table");
    table.insertAdjacentHTML(
      "afterbegin",
      `<thead>
    <tr>
      <th>Дата</th>
      <th>Имя пользователя</th>
      <th>Имя репозитория</th>
      <th>Язык</th>
    </tr>
  </thead>`
    );
    const tbody = document.createElement("tbody");
    table.append(tbody);
    lists.forEach((list) => renderCell(list, tbody));
    answerField.append(table);
  }
  input.disabled = false;
  input.focus();
};

export default getRender;
