function calcCalender(newYear, newMonth) {
  let d = new Date(newYear, newMonth - 1, 1),
    dLength = 32 - new Date(newYear, newMonth - 1, 32).getDate(),
    year = d.getFullYear(),
    month = d.getMonth(),
    date = d.getDate(), // 1
    day = d.getDay(); // 3

  let captionYear = document.querySelector('.year');
  let captionMonth = document.querySelector('.month');
  let startDay = document.querySelectorAll('tr td');

  for (let i = 0; i < startDay.length; i++) {
    startDay[i].innerHTML = '&nbsp;';
  }

  for (let i = day; i < day + dLength; i++) { // 공백인 startDay의 day번쨰 칸에 일수입력
    startDay[i].innerHTML = date + '';
    date++;
  }

  captionYear.innerHTML = year + '';
  captionMonth.innerHTML = (month + 1) + '';
}


(function() {
  let prev = document.getElementById('prev'),
      next = document.getElementById('next'),
      year = new Date().getFullYear(),
    month = new Date().getMonth() + 1;

  calcCalender(year, month);

  prev.onclick = function() {
    calcCalender(year, --month);
  };
  next.onclick = function() {
    calcCalender(year, ++month);
  };

})();

console.log(calcCalender(2020, 10));
calcCalender(2020, 1);