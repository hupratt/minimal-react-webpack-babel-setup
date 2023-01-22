// https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(new Date(2023, 1, 22, i, 0));
    }
    if (random() < 0.5) {
      result.push(new Date(2023, 1, 22, i, 30));
    }
  }
  return result;
};
const submitAPI = function (formData) {
  return true;
};

export { fetchAPI, submitAPI };
