const lightBox = document.getElementById('light-box');
const indicator = document.querySelectorAll('.indicator button');
const block = document.querySelector('#block');

function openLightBox(num) {
  lightBox.setAttribute('class', 'active');
  block.setAttribute('class', 'active');
  change_img(num);
  indicator[num - 1].focus();

}

function closeLightBox() {
  lightBox.removeAttribute('class');
  block.removeAttribute('class');
}

function change_img(val) {
  let images = document.querySelectorAll('figure > img');

  for (let i = 0; i < images.length; i++) {
    images[i].removeAttribute('class');
  }

  console.log(val);
  images[val - 1].setAttribute('class', 'active');

}