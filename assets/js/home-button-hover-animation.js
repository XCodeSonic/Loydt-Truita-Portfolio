const btnAboutMe = document.querySelector('.about-me-circle');
const pAboutMe = document.querySelector('.p-about-me');
const btnGetinTouch = document.querySelector('.get-in-touch-circle');
const pGetInTouch = document.querySelector('.p-get-in-touch');

btnAboutMe.addEventListener('mousemove', (e)=>{
    const x = e.pageX - btnAboutMe.offsetLeft;
    const y = e.pageY - btnAboutMe.offsetTop;
    btnAboutMe.style.setProperty('--x', x + 'px');
    btnAboutMe.style.setProperty('--y', y + 'px');
    btnAboutMe.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    pAboutMe.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
})

btnAboutMe.addEventListener('mouseout', (e)=>{
  btnAboutMe.style.transform = `translate(0px, 0px)`;
  pAboutMe.style.transform = `translate(0px, 0px)`;
})


btnGetinTouch.addEventListener('mousemove', (e)=>{
  const x = e.pageX - btnGetinTouch.offsetLeft;
  const y = e.pageY - btnGetinTouch.offsetTop;
  btnGetinTouch.style.setProperty('--x', x + 'px');
  btnGetinTouch.style.setProperty('--y', y + 'px');
  btnGetinTouch.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  pGetInTouch.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
})

btnGetinTouch.addEventListener('mouseout', (e)=>{
  btnGetinTouch.style.transform = `translate(0px, 0px)`;
  pGetInTouch.style.transform = `translate(0px, 0px)`;
})


