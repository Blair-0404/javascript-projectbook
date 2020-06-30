// html 의 id들 변수 초기화
let title = document.getElementById('title');
let addBtn = document.getElementById('add-btn');
let list = document.getElementById('list');
let li = list.getElementsByTagName('li');
// let li = document.querySelectorAll('li'); // 혹은 CSS 선택자방식으로 변수를 선언
// let input = document.getElementById('input-aaa');
// let li = document.querySelectorAll('li'); // 혹은 CSS 선택자방식으로 변수를 선언

// let input = document.getElementById('input-aaa');
// let name = '';
// console.log(title);
// title.addEventListener('click', (event) => {
//   console.log(event);
// window.location.href = 'https://www.naver.com'
// });
//
// input.addEventListener('change', (event) => {
//   name = event.target.value;
// });
//
// addBtn.addEventListener('click', () => {
//   const li4 = document.createElement('li');
//   li4.innerText = name;
//   list.appendChild(li4)
// });

list.addEventListener('click', activeItem);
// 이벤트 바인딩이란? 이벤트 리스너가 회부 함수를 매개 변수로 참조하는 방

// 위의 addEventListener 이벤트 리스너가 호출하게 될 콜백함수!
function activeItem(event) {
  if (event.target.nodeName === 'LI') {
    title.innerHTML = event.target.innerText;// 해당목록 클릭시 제목 영역에 표시

    // 목록스타일 초기화
    for(let i = 0; i < event.target.parentNode.children.length; i++) {
      event.target.parentNode.children[i].removeAttribute('class');
    }

    // 클릭한 목록 스타일 지정
    event.target.setAttribute('class', 'active');
  } // end if
} // end function

  addBtn.addEventListener('click', function () {
    let txt = prompt('제목입력');
    list.innerHTML += '<li>' + txt + '</li>';
  });