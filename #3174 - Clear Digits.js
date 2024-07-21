var clearDigits = function (s) {
  let regex = /[a-zA-z][0-9]/g;
  while (regex.test(s)) s = s.replace(regex, "");
  return s;
};
console.log(clearDigits("ag3"));
