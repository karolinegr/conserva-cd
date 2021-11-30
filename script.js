//image slider
const previsousEl = document.getElementById('previous')
const nextEl = document.getElementById('next')
const sliderEl = document.getElementById('slider')
let interval = undefined
let timeout = undefined
let selectedImageIndex = 0

previsousEl.addEventListener('click', onPreviousClick)
nextEl.addEventListener('click', onNextClick)

autoScroll()

function onPreviousClick(){
    const sliderWidth = sliderEl.offsetWidth
    sliderEl.scrollLeft -= sliderWidth
    --selectedImageIndex
    handleActiveDot()
    handleSliderClick()
}

function onNextClick(){
    const sliderWidth = sliderEl.offsetWidth
    sliderEl.scrollLeft += sliderWidth
    ++selectedImageIndex
    handleActiveDot()
    handleSliderClick()
}

function handleSliderClick(){
    clearTimeout(timeout)
    clearInterval(interval)
    interval = undefined
    timeout = setTimeout(() =>{
        autoScroll()
    },10000)
}

function handleActiveDot(){
    const list = Array.from(document.getElementsByClassName('dot'))
    
    if(selectedImageIndex < 0) selectedImageIndex = 0
    if(selectedImageIndex >= list.length) selectedImageIndex = list.length - 1
    
    list.forEach(el => el.classList.remove('active'))
    list[selectedImageIndex].classList.add('active')
}


function autoScroll(){
    if (interval) return;

    interval = setInterval(() => {
        const sliderWidth = sliderEl.offsetWidth
        const numberOfImages = sliderEl.childElementCount
        const selectedImage = (sliderEl.scrollLeft / sliderWidth) + 1

        if(numberOfImages === selectedImage){
            sliderEl.scrollLeft = 0
            selectedImageIndex = 0
            handleActiveDot()
            return
        }
         sliderEl.scrollLeft += sliderWidth
         ++selectedImageIndex
         handleActiveDot()
    }, 5000)
}


// calculadora carbono
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = [...document.querySelectorAll(".step p")];
const progressCheck = [...document.querySelectorAll(".step .check")];
const bullet = [...document.querySelectorAll(".step .bullet")];
let max = 4;
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  event.preventDefault();
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  event.preventDefault();
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  event.preventDefault();
  current += 1;
});



prevBtnSec.addEventListener("click", function(event){
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  event.preventDefault();
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  event.preventDefault();
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  event.preventDefault();
  current -= 1;
});

var totalSomaValor = 0;
      function result(){
        var voo_domestico = document.getElementById("nacional").value;
        var voo_internacional = document.getElementById("internacional").value;
        var carro = document.getElementById("carro").value;
        var trem = document.getElementById("trem").value;
        var onibus = document.getElementById("onibus").value;
        var carne = document.getElementById("carne").value;

        var totalSoma = parseInt(voo_domestico*106.1) +  parseInt(voo_internacional*605.6) +  parseInt(carro*16) +  parseInt(trem*8) +  parseInt(onibus*8) +  parseInt(carne*0.02310);
        console.log(totalSoma)
        window.alert(`Você emite ${totalSoma} tCO2 por ano`)
      }
