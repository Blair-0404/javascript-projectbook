var banner = document.getElementById('banner'),			// 배너 본체
  img = banner.getElementsByTagName('img'),			// 스프라이트 이미지
  toggle = document.getElementById('toggle'),			// 배너 토글 버튼
  sound_btn = document.getElementById('sound_btn');	// 사운드 토글 버튼

// 배너의 높이값 변수
var banner_height = getComputedStyle(banner).height;
// console.log(banner_height);
var cast = []; // 풍선 객체