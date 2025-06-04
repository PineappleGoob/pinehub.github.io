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
    alert("hah you tapped something");
  });
function ButtonAppear() {

  const element = document.getElementById('fadeElement');
  element.classList.add('visible'); // This will trigger the fade-in
}





