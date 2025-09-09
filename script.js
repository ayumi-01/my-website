/*スライダーここまで*/
const track = document.querySelector('.gallery-track');
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');
const thumbs = document.querySelectorAll('.thumb');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const dots = document.querySelectorAll('.dot');

let index = 0;
const itemWidth = 410; // 画像幅 + gap

rightBtn.addEventListener('click', () => {
  index = Math.min(index + 1, thumbs.length - 1);
  track.scrollTo({
    left: index * itemWidth,
    behavior: 'smooth'
  });
  updateDots();
});

leftBtn.addEventListener('click', () => {
  index = Math.max(index - 1, 0);
  track.scrollTo({
    left: index * itemWidth,
    behavior: 'smooth'
  });
  updateDots();
});

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) {
    dots[index].classList.add('active');
  }
}
/*スラーダーここまで*/
thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    lightboxImg.src = thumb.src;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

/*ハンバーガーメニュここから*/
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
