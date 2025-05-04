let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
  setTimeout(()=>{
    logoSpan.forEach((span, idx) =>{
      setTimeout(()=>{
        span.classList.add('active');
      },(idx + 1) * 500)
    });

    setTimeout(()=>{
      logoSpan.forEach((span, idx)=>{
        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 500)
      })
      }, 1500);

      setTimeout(()=>{
        intro.style.top = '-100vh';
        intro.style.borderRadius = '50%';

        document.querySelector('header').classList.add('animate-float-down');
        document.querySelector('body').classList.add('overflowY');
      }, 2000);
    })
  });

  function showTransitionSplash(name){
    let splashCurtain = document.querySelector('.splashCurtain');
    splashCurtain.classList.add('splashCurtain-animation');
    setTimeout(()=>{
      window.location.href=`${name}.html`;
    }, 600);
  }

  function showTransitionSplashToHome(){
    let splashCurtain = document.querySelector('.splashCurtain');
    splashCurtain.classList.add('splashCurtain-animation');
    setTimeout(()=>{
      window.location.href='../../../index.html';
    }, 600);
  }