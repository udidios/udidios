var date = new Date();
var month = date.getMonth();
var year = date.getFullYear();
var arr = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER"
];
number = (arr[month]);
number2 = (arr[month + 1]);

alert(number + '\n' + number2);
