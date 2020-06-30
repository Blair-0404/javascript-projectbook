const newYear = 2017,
      newMonth = 6,
      d = new Date(newYear, newMonth, 1), // 2017년 7월 1일

      dLength = 32 - new Date(newYear, newMonth, 32).getDate(); // 31

let year = d.getFullYear(), // 2017
    month = d.getMonth(), // 6 (month 는0부터 이므로 실제로는 7월달)
    date = d.getDate(), // 1 (일수) (즉 입력될 숫자)
    day = d.getDay(); // 6 (7월1일은 토요일=6 이므로) (요일 위치)

const captionOfYear = document.querySelector('.year'),
      captionOfMonth = document.querySelector('.month');
let startDay = document.querySelectorAll('tr td'); // 모든 칸들을 잡아온다.....고.....

for(let i = day; i < day + dLength; i++) { // 여기서 day는 일수(date)가 입력될 칸의 위치로 생각하기
  startDay[i].innerHTML = date + '';
  date++;
}

captionOfYear.innerHTML = year + '';
captionOfMonth.innerHTML = month + 1 + '';

