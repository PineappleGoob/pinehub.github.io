const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-fade').forEach(el => {
  observer.observe(el);
});




document.querySelector('.hero').addEventListener('click', () => {
    alert("You touched it. You absolute fool.");
  });
  
//typed text
const text = "Heya mate";
const text2 = "wanna have a bad time";
const text3 = "Then down you go";
const speed = 50; // milliseconds per character
let i = 0;

function type() {
  if (i < text.length) {
    ButtonAppear()
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, speed);
  } else {
    // Once text is fully typed, wait a bit then start type2
    setTimeout(() => {
      document.getElementById("typed-text").innerHTML = '';
      i = 0; // Reset index
      type2(); // Start typing the second message
    }, 2000); // Wait 1 second before switching
  }
}

function type2() {
  if (i < text2.length) {
    document.getElementById("typed-text").innerHTML += text2.charAt(i);
    i++;
    setTimeout(type2, speed);
  } else {
    
    // Optional: Loop back to the first message
    setTimeout(() => {
      document.getElementById("typed-text").innerHTML = '';
      i = 0;
      type3();
    }, 1000);
  }
}

function ButtonAppear() {

  const element = document.getElementById('fadeElement');
  element.classList.add('visible'); // This will trigger the fade-in
}


function type3() {
  if (i < text3.length) {
    document.getElementById("typed-text").innerHTML += text3.charAt(i);
    i++;
    setTimeout(type3, speed);
  }
}

// Start the first typing effect
type();

