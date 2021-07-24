let selectId = document.querySelector("#selectorField")
let change_select = document.querySelector(".change_select")
let li_options = document.querySelectorAll(".li_options")
let ul_list = document.querySelector("#ul_list")

selectId.onclick = () => {
    ul_list.classList.toggle("hide")
}

console.log();
li_options.forEach( (option) => {
    option.onclick =  () => {
        change_select.innerHTML = option.innerHTML
        ul_list.classList.toggle("hide")
    }
})


let dropdownPage = document.querySelectorAll(".dropdown_page")
let dropdownContent = document.querySelectorAll(".dropdown_cont")
let aLink = document.querySelectorAll(".dropdown_cont a")
for(let i = 0 ; i< dropdownPage.length ; i++){
    for(let j = i ; j < dropdownContent.length ; j++){
        if(i === j){
            dropdownPage[i].onclick = () => {
                dropdownContent[j].classList.toggle("hide")
            }
        }
    }
}

// collapse menu

let collapseMenu = document.querySelector("#collapse")
let side = document.querySelector("#side")

collapseMenu.addEventListener("click" , ()=>{
    side.classList.toggle("hide")
})

// bar icon block

let barIcon = document.querySelector(".bar_icon")
let sideBar = document.querySelector(".sidebar")

barIcon.addEventListener("click" , () => {
    sideBar.classList.toggle("hidebar")
})


// charts

let lineChart1 = document.querySelector("#chartStatistics").getContext("2d")

// global defaults

    // Chart.defaults.global.defaultFontSize = 18 ;
    // Chart.defaults.global.defaultFontColor = "#B0ABAB";
    // Chart.defaults.global.defaultFontFamily = "Gill Sans";

let lineStatis = new Chart(lineChart1 , {
    type: "line",
    data:{
        labels: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: '# first',
                fill: true ,

                backgroundColor:"#05CCA7",
                pointBorderColor:"#fff",
                pointBorderWidth:1,
                pointHoverRadius:5,
                pointHoverBackgroundColor:"rgba(75,192,192,1)",
                pointHoverBorderColor:"rgba(220,220,220,1)",
                pointHoverBorderWidth:2,
                pointRadius:1,
                pointHitRadius:10,
                data:[0,400,150,300,120,200,300]
            },
            {
                label: '# second',
                fill: true ,
                
                backgroundColor:"#00D8D2",
                pointBorderColor:"#fff",
                pointBorderWidth:1,
                pointHoverRadius:5,
                pointHoverBackgroundColor:"rgba(75,192,192,1)",
                pointHoverBorderColor:"rgba(220,220,220,1)",
                pointHoverBorderWidth:2,
                pointRadius:1,
                pointHitRadius:10,
                data:[0,45,600,220,60,240,30 ,800]
            },
            {
                label: '# third',
                fill: true ,
                backgroundColor:"#FFD970",
                pointBorderColor:"#fff",
                pointBorderWidth:1,
                pointHoverRadius:5,
                pointHoverBackgroundColor:"rgba(75,192,192,1)",
                pointHoverBorderColor:"rgba(220,220,220,1)",
                pointHoverBorderWidth:2,
                pointRadius:1,
                pointHitRadius:10,
                data:[0,500,60,90,300,50, 100]
            },
          ],
    },

    options:{

        plugins: {
            legend: {
                display: false,
                position: "right",

                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
        }
    }
})


let lineChart2 = document.querySelector("#chartYearly").getContext("2d")
let script = document.createElement('script');
script.src = '/chart.js';
document.body.appendChild(script);

let lineYearly = new Chart( lineChart2, {
    type:"line",
    data : {
        labels: ['2014', '', '', '', '', '2015', ''],
        datasets: [
              {
                label: '# first',
                fill: false,
                borderCapStyle:"butt",
                borderDash:[],
                borderDashOffset:0.0,
                borderJoinStyle:"miter",
                borderColor: '#fff',
                pointBorderColor:"#5363BB",
                pointBackgroundColor:"#fff",
                pointBorderWidth:1,
                pointHoverRadius:5,
                pointHoverBackgroundColor:"rgba(75,192,192,1)",
                pointHoverBorderColor:"#fff",
                pointHoverBorderWidth:2,
                pointRadius:1,
                pointHitRadius:10,
                data:[0, 20,20 ,30, 40, 20 ,50]
              },
            
          ],
      },
    options:{
      
        labels:{
            pointLabelFontColor : "#FFFFFF",
            pointLabelFontSize : 30,
        },
        plugins:{
            decimation:{
                enabled:true,
            },
            legend:{
                display: false,
                
            }

        }
    }

})


let lastGraph = document.querySelector("#graphLast").getContext("2d")

let linelastGraph = new Chart( lastGraph, {

    type:"line",

    data : {
        labels: ['2014', '', '', '', '', '2015', ''],

        datasets: [
              {
                pointColor: "red",
                label: '# first',
                fill: false,
                borderCapStyle:"butt",
                borderDash:[],
                borderDashOffset:0.0,
                borderJoinStyle:"miter",
                borderColor: '#fff',
                pointBorderColor:"#5363BB",
                pointBackgroundColor:"#fff",
               
                pointBorderWidth:1,
                pointHoverRadius:5,
                pointHoverBackgroundColor:"rgba(75,192,192,1)",
                pointHoverBorderColor:"#fff",
                pointHoverBorderWidth:2,
                pointRadius:1,
                  pointLabelFontColor : "#FFFFFF",
                pointHitRadius:10,
                data:[0, 20,20 ,30, 40, 20 ,50]
              },
            
          ],
      },

   options:{
          scales: {

       
    x: {
      grid: {
        display: false,

      }
    },

    y: {
      grid: {
        display: false

      }
    }
     
    
  },

        labels:{
            pointLabelFontColor : "#FFFFFF",
            pointLabelFontSize : 30,


        },
         scale: {
            scaleLabel:{
                fontColor: 'red'
            }
        },
        plugins:{
            decimation:{
                enabled: false,

            },
            legend:{
                display: false,

                 
            },
 

        }
    }

})