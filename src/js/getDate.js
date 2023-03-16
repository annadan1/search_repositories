const getDate = (date) => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const currentDate = new Date();
  if (
    `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}` ===
    `${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    } ${currentDate.getFullYear()}`
  ) {
    return 'Сегодня';
  } else if (
    `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}` ===
    `${currentDate.getDate() - 1} ${
      months[currentDate.getMonth()]
    } ${currentDate.getFullYear()}`
  ) {
    return 'Вчера';
  } else {
    return `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}`;
  }
};

export default getDate;
