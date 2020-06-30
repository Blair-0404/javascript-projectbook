function set_balloon(a) {
  var b = Math.floor(490 * Math.random() + 10), c = Math.floor(280 * Math.random() + 120),
    d = Math.floor(100 * Math.random() + 100), e = Math.floor(360 * Math.random() + 0), f = 2 * Math.random() + 0;
  cast[a] = {x: b, y: -c, size: d, angle: e, speed: f}
}

function ball_init() {
  for (var a = 0; a < img.length; a++) set_balloon(a), img[a].style.left = "-9999px", img[a].style.top = "-9999px"
}

function animate_balloon() {
  for (var a = 0; a < img.length; a++) img[a].style.left = cast[a].x + "px", img[a].style.top = cast[a].y + "px", img[a].style.transform = "rotate(" + cast[a].angle + "deg)", cast[a].y < parseInt(banner_height) ? (cast[a].y += 1 + cast[a].speed, cast[a].angle += cast[a].speed) : set_balloon(a)
}

function bgm_init() {
  var a = new Audio;
  a.src = "images/bgm.mp3", a.loop = !0, document.body.appendChild(a)
}

var banner = document.getElementById("banner"), img = banner.getElementsByTagName("img"),
  toggle = document.getElementById("toggle"), sound_btn = document.getElementById("sound_btn"),
  banner_height = getComputedStyle(banner).height, cast = [];
ball_init(), setInterval(function () {
  animate_balloon()
}, 1e3 / 30), bgm_init(), sound_btn.onclick = function (a) {
  var b = sound_btn.getAttribute("class"), c = document.getElementsByTagName("audio");
  "active" == b ? (sound_btn.removeAttribute("class"), sound_btn.setAttribute("src", "images/sound_off.png"), c[0].pause()) : (sound_btn.setAttribute("class", "active"), sound_btn.setAttribute("src", "images/sound_on.png"), c[0].play()), a.stopPropagation()
}, toggle.onclick = function () {
  var a = banner.getAttribute("class");
  return "active" == a ? (banner.removeAttribute("class"), toggle.innerHTML = "배너 열기", !1) : (banner.setAttribute("class", "active"), toggle.innerHTML = "배너 닫기", !1)
}, banner.onclick = function () {
  window.open("https://csslick.github.io/", "_blank")
};
