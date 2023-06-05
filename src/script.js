let btn = document.querySelector('.box');
btn.addEventListener("click", function () {
   let mobile = document.querySelector('.mobile-nav')
   mobile.classList.remove('hidden')
   let box2 = document.querySelector('.box2')
   box2.classList.remove('hidden')
   let box = document.querySelector('.box')
   box.classList.add('hidden')
   let title = document.querySelector('.title')
   title.classList.add('hidden')
})

let box2 = document.querySelector('.box2')
box2.addEventListener('click', function () {
    let mobile = document.querySelector('.mobile-nav')
    mobile.classList.add('hidden')
    let box2 = document.querySelector('.box2')
    box2.classList.add('hidden')
    let box = document.querySelector('.box')
    box.classList.remove('hidden')
    let title = document.querySelector('.title')
   title.classList.remove('hidden')
})
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 1500,
    delay: 400
    //interval
  });
  ScrollReveal().reveal('.title', { delay: 500, origin: 'left'  });
  ScrollReveal().reveal('.Hotel', { delay: 500, origin: 'top'  });
  ScrollReveal().reveal('.Flights', { delay: 500, origin: 'bottom'  });
  ScrollReveal().reveal('.Trains', { delay: 500, origin: 'top'  });
  ScrollReveal().reveal('.Buses', { delay: 500, origin: 'bottom'  });
  ScrollReveal().reveal('.Homestays', { delay: 500, origin: 'top'  });
  