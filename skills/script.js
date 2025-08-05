const chars = [...document.querySelectorAll('.charr')];
const charrs = [...document.querySelectorAll('.char')];
let index = 0;
let indexs = 0;
let busy = false;
let startX = 0;
let endX = 0;
const threshold = 50; // Minimum distance for a swipe

function updatePositions() {
  chars.forEach((el, i) => {
    console.log(index);
    el.classList.remove('active', 'exit-up', 'enter-up');
    if (i === index) {
      el.classList.add('active');
    } else if (i === (index - 1 + chars.length) % chars.length) {
      el.classList.add('left');
    } else if (i === (index + 1) % chars.length) {
      el.classList.add('exit-up');
    } else {
      el.style.opacity = 0;
    }
  });
}


function updatePositionss() {
  charrs.forEach((el, i) => {
    el.classList.remove('active', 'left', 'right');
    if (i === indexs) {
      el.classList.add('active');
    } else if (i === (indexs - 1 + charrs.length) % charrs.length) {
      el.classList.add('left');
    } else if (i === (indexs + 1) % charrs.length) {
      el.classList.add('right');
    } else {
      el.style.opacity = 0;
    }
  });
}


window.addEventListener('wheel', e => {
  if (busy) return;
  busy = true;
  const direction = Math.sign(e.deltaY);
  if (direction === 0) return;

  const next = (index + direction + chars.length) % chars.length; //should probably figure out why it uses chars.length idk mrgpt said so soooooooooooo yoink
  const nexts = (indexs + direction + charrs.length) % charrs.length;
  index = next;
  indexs = nexts;
  updatePositions();
  updatePositionss();

  setTimeout(() => busy = false, 500);
});

//startup processussusus
updatePositions();
