const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const inputs = document.querySelectorAll('input[type="radio"]')
let i = 0;
i++;
arrowRight.addEventListener('click', () => {
    inputs[i].removeAttribute('checked');
   i= i+1
    if (i >= inputs.length) {
        i = 0;
    }
    inputs[i].setAttribute('checked', 'true');
})

arrowLeft.addEventListener('click', () => {
    inputs[i].removeAttribute('checked');
    i = i-1;
    if(i<0){
        i = inputs.length - 1;
    }
    inputs[i].setAttribute('checked', 'true');

})
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const photos = document.querySelectorAll('#gallery .photos img');
let r= 0 ;
r++;

btnPrev.addEventListener('click',()=>{
    photos[r].classList.remove('active');
    r=r+1;
    if(r>=photos.length){
        r=0
    }
    photos[r].classList.add('active');
})
btnNext.addEventListener('click',()=>{
    photos[r].classList.remove('active');
    r=r-1;
    if (r<0){
        r= photos.length -1;
    }
    photos[r].classList.add('active');
})