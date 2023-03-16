import getRender from "./getRender";

const url = "https://api.github.com/search/repositories?";

const getSearch = (searchValue, fields) => {
  const searchParams = `q=${searchValue}&per_page=10`;
  fetch(url + searchParams)
    .then((res) => res.json())
    .then((data) => {
      getRender(data, fields);
    })
    .catch(() => {
      getRender(null, fields);
    });
};

export default getSearch;
