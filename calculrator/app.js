// <변수선언>
const inp = document.forms['cal'];
const input = inp.getElementsByTagName('input');
const cls_btn = document.getElementsByClassName('cls_btn')[0]; // 인덱스를 설정안하면 배열형태로 나온다.
const result_btn = document.getElementsByClassName('result_btn')[0]; // 인덱스를 설정하지 않으면?

// 계산기 clear 클릭시 초기화 처리 콜백함수
function clear() {
  inp['result'].value = 0;
}

// 계산기 입력 처리 콜백함수
function calc(value) {
  if (inp['result'].value === '0') {
    inp['result'].value = '';
  }

  inp['result'].value += value;
}

// 계산결과 처리 콜백함수
function my_result() {
  const result = document.forms['cal']['result'];
  let calc = eval(result.value);

  // 결과창에 표시
  inp['result'].value = calc;
}

// <이벤트 핸들러러 및 콜백함수>

// 숫자 및 사칙연산
for (let i = 0; i < input.length; i++) {

  if (input[i].value !== '=' && input[i] !== 'clear') {
    input[i].onclick = function () {
      calc(this.value);
    }
  }
}

// clear 클릭시 초기화 이벤트 핸들
cls_btn.onclick = function () {
  clear();
}

// 결과 버튼
result_btn.onclick = function () {
  my_result();
}

// 기능 개선(예외발생시 처리문)
result_btn.onclick = function () {
  try {
    my_result();
  } catch (err) {
    let result = inp['result'];
    result.value = '입력오류;'
  }
}