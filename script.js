const chars = [...document.querySelectorAll('.char')];
let index = 0;
let busy = false;
let startX = 0;
let endX = 0;
const threshold = 50; // Minimum distance for a swipe

function updatePositions() {
  chars.forEach((el, i) => {
    el.classList.remove('active', 'left', 'right');
    if (i === index) {
      el.classList.add('active');
    } else if (i === (index - 1 + chars.length) % chars.length) {
      el.classList.add('left');
    } else if (i === (index + 1) % chars.length) {
      el.classList.add('right');
    } else {
      el.style.opacity = 0;
    }
  });
}


window.addEventListener('click', e => {
  if (busy) return;
  if (index == 1) { //about me
window.location.href = "/aboutme/index.html"
  }
  else if (index == 2) { //coming soon
window.location.href = "/aboutme/index.html"
  }
  else if (index == 0) { //skills
window.location.href = "/skills/index.html"
  }
});

window.addEventListener('wheel', e => {
  if (busy) return;
  busy = true;
  const direction = Math.sign(e.deltaY);
  if (direction === 0) return;

  const next = (index + direction + chars.length) % chars.length; //should probably figure out why it uses chars.length idk mrgpt said so soooooooooooo yoink
  index = next;
  updatePositions();

  setTimeout(() => busy = false, 500);
});

window.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

window.addEventListener('touchend', (e) => {
  if (busy) return;
  busy = true;
 endX = e.changedTouches[0].clientX;
  const diff = endX - startX;




  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      console.log('Swipe Right');
      const next = (index + -1 + chars.length) % chars.length;
      index = next;
      updatePositions();
      setTimeout(() => busy = false, 500);
    }; else {
      console.log('Swipe Left');
      const next = (index + 1 + chars.length) % chars.length;
      index = next;
      updatePositions();
      setTimeout(() => busy = false, 500);
    };
else if (Math.abs(diff) > threshold - 40) {
    if (index == 1) { //about me
window.location.href = "/aboutme/index.html"
  };
  else if (index == 2) { //coming soon
window.location.href = "/aboutme/index.html"
  };
  }
});

//startup processussusus
updatePositions();



