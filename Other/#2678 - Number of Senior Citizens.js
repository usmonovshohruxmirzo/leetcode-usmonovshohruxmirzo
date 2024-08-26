var countSeniors = function (details) {
  return details.filter((value) => value.slice(11, 13) > 60).length;
};