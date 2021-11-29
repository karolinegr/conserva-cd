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

nextBtnFirst.addEventListener("click", function(){
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(){
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(){
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Seu gasto de CO2 é:" + totalSoma);
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(){
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(){
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(){
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

//calculos carbono
   //var voo_domestico = "106.1"; //por voo
    //var voo_internacional = "605.6"; //por voo
    //var transporte = "1.6";    //por litro, ou seja 1 litro = 10 km, sendo assim 1.6 x 10 = 16
    //var carne = "0,0231"; // por dias ingerindo carne
    //var coleta_sim = "0,67";
    //var coleta_nao = "0,70";
    //var energia = (12*(1/VarPessoas)*(1/1000)*VarEnergia*0.1)

    function totalNacioanl(){
    var voo_domestico = parseInt(document.getElementById('nacional').value);
    totalNacional = voo_domestico *106.1;
    document.getElementById('nacional').value = totalNacional;
    }

    function totalInter(){
    var voo_internacional = parseInt(document.getElementById('internacional').value);
    totalInter = voo_internacional *605.6;
    document.getElementById('internacional').value = totalInter;
    }

    function totalCarro(){
    var carro = parseInt(document.getElementById('carro').value);
    totalCarro = carro *16;
    document.getElementById('carro').value = totalCarro;
    }

    function totalTrem(){
    var trem = parseInt(document.getElementById('Trem').value);
    totalTrem = trem *16;
    document.getElementById('Trem').value = totalTrem;
    }

    function totalOnibus(){
    var onibus = parseInt(document.getElementById('onibus').value);
    totalOnibus = onibus *16;
    document.getElementById('onibus').value = totalOnibus;
    }

    function totalPessoas(){
    var pessoas = parseInt(document.getElementById('pessoas').value);
    totalPessoas = pessoas;
    document.getElementById('pessoas').value = totalPessoas;
  }

    function totalEnergia(){
    var energia = parseInt(document.getElementById('energia').value);
    totalEnergia = (12*(1/pessoas)*(1/1000)*energia*0.1)
    document.getElementById('energia').value = totalEnergia;

    }
    function totalSoma(){
    var totalSoma = totalNacional + totalIter + totalCarro + totalTrem + totalOnibus + totalPessoas + totalEnergia
  }
    

//continue
