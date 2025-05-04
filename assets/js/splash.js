let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
  setTimeout(()=>{
    logoSpan.forEach((span, idx) =>{
      setTimeout(()=>{
        span.classList.add('active');
      },(idx + 1) * 300)
    });

    setTimeout(()=>{
      logoSpan.forEach((span, idx)=>{
        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 300)
      })
      }, 2500);

      setTimeout(()=>{
        intro.style.top = '-100vh';
        intro.style.borderRadius = '50%';

        document.querySelector('header').classList.add('animate-float-down');

        document.querySelector('.profile').classList.add('animate-float-up');
        document.querySelector('.profile-location').classList.add('animate-float-right');
        document.querySelector('.profile-info').classList.add('animate-float-left');
        document.querySelector('.profile-info2').classList.add('animate-float-left');
        document.querySelector('.arrow').classList.add('animate-arrow-rotate');
        document.querySelector('body').classList.add('overflowY');
      }, 5000);
    })
  });

function showTransitionSplash(name){
  let splashCurtain = document.querySelector('.splashCurtain');
  splashCurtain.classList.add('splashCurtain-animation');
  setTimeout(()=>{
    window.location.href=`assets/src/${name}.html`;
  }, 600);
  

  // splashCurtain.style.zIndex='9999';
  
  // splashCurtain.style.width= '100%';
  // splashCurtain.style.height='200vh';
  // splashCurtain.style.backgroundColor= '#161616';
  // splashCurtain.style.transition= '1s';
}