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



const mediaBrasil = 10.4

var totalSomaValor = 0;
      function result(){
        var voo_domestico = document.getElementById("nacional").value;
        var voo_internacional = document.getElementById("internacional").value;
        var carro = document.getElementById("carro").value;
        var trem = document.getElementById("trem").value;
        var onibus = document.getElementById("onibus").value;
        var carne = document.getElementById("carne").value;

        var pessoas = document.getElementById("pessoas").value;
        var qtd_gasDomestico = document.getElementById("gas").value ;
        var energia = document.getElementById("energia").value ;
        
        const coletaSeletiva = document.getElementById('residuos').options.selectedIndex
        const gas_type = document.getElementById('gas_type').options.selectedIndex

        if (coletaSeletiva === 0){
            var residuos = 0.67;
        } else {
            var residuos = 0.70;
        }

        if (gas_type === 0){
            var gas_domestico = 38;
        } else {
            var gas_domestico = 2.1;
        }
        

        var domestico = (pessoas*(((energia/0.703)*0.1) + ((gas_domestico/13)*qtd_gasDomestico)))/1000
        var transporte = (carro*16 + trem*8 + onibus*8)/1000
        var consumo = (carne*0.02310)/1000
        var transporteAereo = (voo_domestico*106.1 + voo_internacional*605.6)/1000
            
        var totalSoma = (transporteAereo + transporte +  consumo + residuos + domestico).toFixed(2);

        window.alert(`Você emite ${totalSoma} tCO2 por ano`)

        google.charts.load('current', {'packages':['corechart']});
        function mostrarGraficoPizza(){
         
          // 
          
          function desenharGraficoPizza(){
              var tabela = new google.visualization.DataTable();
              tabela.addColumn('string', 'Categoria');
              tabela.addColumn('number', 'TCO2 por ano');
              tabela.addRows([
                  ['Transporte', transporte],
                  ['Consumo', consumo],
                  ['Transporte Aéreo', transporteAereo],
                  ['Resíduos', residuos],
                  ['Doméstico', domestico]  
              ]);
          
              let options ={
                  pieHole:0.2,
                  pieSliceTextStyle: {
                      color: 'black',
                      fontSize: 14,
                      fontName: 'Inter',
                    },
                  slices:[
                      {color:'#06667D'},
                      {color:'#218C9F'},
                      {color:'#DA9280'},
                      {color:'#F1A48A'},
                      {color:'#EEBFAF'}
                  ],
                  with:450,
                  height:350,
                  chartArea:{
                      height:800,
                      width: 800,
                  }
              }
              var grafico = new google.visualization.PieChart(document.getElementById('chart_carbon'));
              grafico.draw(tabela, options)
          }
          google.charts.setOnLoadCallback(desenharGraficoPizza);
        };
        
        function mostrarGraficoBarra(){
          
          var valorTotalCO = parseInt(totalSoma);
        
          function desenharGraficoBarra(){
              var tabelaBarras = new google.visualization.arrayToDataTable(
                  [
                      ['Emissão de CO2','Média de um brasileiro (por ano)','Sua pegada'],
                      ['', mediaBrasil, valorTotalCO]
                  ]
              );
          
              if (mediaBrasil >= valorTotalCO){
                  var options = {
                      chartArea: {
                          width:400,
                          height:'25%',
                      },
                      colors:['#01404E','#EEBFAF'],
                      vAxis:{
                          title:'Emissão de carbono',
                          titleTextStyle:{
                              color:'black',
                              fontSize: 10,
                              italic:false,
                              bold:true,
                          }
                      },
                      width: 800,
                  }
              } else {
                  var options = {
                      chartArea: {
                          width:400,
                          height:'25%',
                      },
                      colors:['#EEBFAF','#01404E'],
                      vAxis:{
                          title:'Emissão de carbono',
                          titleTextStyle:{
                              color:'black',
                              fontSize: 10,
                              italic:false,
                              bold:true,
                          }
                      },
                      width: 800,
                  }
              }
              
              var graficoBarra = new google.visualization.BarChart(document.getElementById('bar_carbon'));
              graficoBarra.draw(tabelaBarras, options)
          }
          google.charts.setOnLoadCallback(desenharGraficoBarra);    
        };

        mostrarGraficoPizza()
        mostrarGraficoBarra()
      }

