const btnSend = document.querySelector('.send-circle');
const pSend = document.querySelector('.p-send');

btnSend.addEventListener('mousemove', (e)=>{
  const x = e.pageX - btnSend.offsetLeft;
  const y = e.pageY - btnSend.offsetTop;
  btnSend.style.setProperty('--x', x + 'px');
  btnSend.style.setProperty('--y', y + 'px');
  btnSend.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  pSend.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
})

btnSend.addEventListener('mouseout', (e)=>{
  btnSend.style.transform = `translate(0px, 0px)`;
  pSend.style.transform = `translate(0px, 0px)`;
})
