var reformatDate = function (date) {
  let result;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function withZero(n) {
    if (n < 10) n = "0" + n;
    return n;
  }

  for (let i = 0; i < months.length; i++) {
    let d = date.split(" ")[0].replace(/[a-zA-Z]/g, "");
    let m = date.split(" ")[1];
    let y = date.split(" ")[2];
    if (months[i].substring(0, 3) === m) {
      result = `${withZero(d)} ${withZero(i + 1)} ${y}`;
    }
  }
  return result.split(" ").reverse().join("-");
};
