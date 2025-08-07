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
    //console.log(index);
    el.classList.remove('active', 'exit-up', 'enter-up');
    if (i === index) {
      el.classList.add('active');
    } else if (i === (index - 1 + chars.length) % chars.length || i === (index + 2 + chars.length) % chars.length || i === (index + 3 + chars.length) % chars.length) {
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
    el.classList.remove('active', 'left', 'right','farright');
    if (i === indexs) {
      console.log(indexs);
      el.classList.add('active');
    } else if (i === (indexs - 1 + charrs.length) % charrs.length) {
      el.classList.add('left');
    } else if (i === (indexs + 1) % charrs.length) {
      el.classList.add('right');
    }
    else if (i === (indexs + 2)% charrs.length || i === (indexs + 3)% charrs.length ){
      el.classList.add('farright')
    }
     else {
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

window.addEventListener('keydown', e => {
  if (busy) return;
  busy = true;
  if (e.key === 'ArrowRight') indexs = Math.min(indexs + 1, charrs.length - 1);
  if (e.key === 'ArrowLeft') indexs = Math.max(indexs - 1, 0);
  if (e.key === 'ArrowRight') index = Math.min(index + 1, chars.length - 1);
  if (e.key === 'ArrowLeft') index = Math.max(index - 1, 0);
  updatePositions();
  updatePositionss();
  setTimeout(() => busy = false, 500);
});

window.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

//testtetstestst

window.addEventListener('touchend', (e) => {
  if (busy) return;
  busy = true;
 endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      console.log('Swipe Right');
      const next = (indexs + -1 + charrs.length) % charrs.length;
      indexs = next;
      updatePositions();
      setTimeout(() => busy = false, 500);
    } else {
      console.log('Swipe Left');
      const next = (indexs + 1 + charrs.length) % charrs.length;
      indexs = next;
      updatePositions();
      setTimeout(() => busy = false, 500);
    }
  }
});

//startup processussusus
updatePositions();
updatePositionss();
