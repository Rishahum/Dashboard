// //  SIDEBAR DROPDOWN
//  const fs=require('fs')
// //  var array = require("./server.js")
// //  var ctx = document.getElementById("myChart").getContext("2d");
// const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
// const sidebar = document.getElementById('sidebar');
// var array


// allDropdown.forEach(item=> {
// 	const a = item.parentElement.querySelector('a:first-child');
// 	a.addEventListener('click', function (e) {
// 		e.preventDefault();

// 		if(!this.classList.contains('active')) {
// 			allDropdown.forEach(i=> {
// 				const aLink = i.parentElement.querySelector('a:first-child');

// 				aLink.classList.remove('active');
// 				i.classList.remove('show');
// 			})
// 		}

// 		this.classList.toggle('active');
// 		item.classList.toggle('show');
// 	})
// })
// fs.readFileSync('f1.txt',"utf8", (err,data)=>{
// 	if(err){
// 		console.log(err)
// 	}else{
// 		array=data.map()
// 	}
// })







// // SIDEBAR COLLAPSE
// const toggleSidebar = document.querySelector('nav .toggle-sidebar');
// const allSideDivider = document.querySelectorAll('#sidebar .divider');

// if(sidebar.classList.contains('hide')) {
// 	allSideDivider.forEach(item=> {
// 		item.textContent = '-'
// 	})
// 	allDropdown.forEach(item=> {
// 		const a = item.parentElement.querySelector('a:first-child');
// 		a.classList.remove('active');
// 		item.classList.remove('show');
// 	})
// } else {
// 	allSideDivider.forEach(item=> {
// 		item.textContent = item.dataset.text;
// 	})
// }

// toggleSidebar.addEventListener('click', function () {
// 	sidebar.classList.toggle('hide');

// 	if(sidebar.classList.contains('hide')) {
// 		allSideDivider.forEach(item=> {
// 			item.textContent = '-'
// 		})

// 		allDropdown.forEach(item=> {
// 			const a = item.parentElement.querySelector('a:first-child');
// 			a.classList.remove('active');
// 			item.classList.remove('show');
// 		})
// 	} else {
// 		allSideDivider.forEach(item=> {
// 			item.textContent = item.dataset.text;
// 		})
// 	}
// })




// sidebar.addEventListener('mouseleave', function () {
// 	if(this.classList.contains('hide')) {
// 		allDropdown.forEach(item=> {
// 			const a = item.parentElement.querySelector('a:first-child');
// 			a.classList.remove('active');
// 			item.classList.remove('show');
// 		})
// 		allSideDivider.forEach(item=> {
// 			item.textContent = '-'
// 		})
// 	}
// })



// sidebar.addEventListener('mouseenter', function () {
// 	if(this.classList.contains('hide')) {
// 		allDropdown.forEach(item=> {
// 			const a = item.parentElement.querySelector('a:first-child');
// 			a.classList.remove('active');
// 			item.classList.remove('show');
// 		})
// 		allSideDivider.forEach(item=> {
// 			item.textContent = item.dataset.text;
// 		})
// 	}
// })




// // PROFILE DROPDOWN
// const profile = document.querySelector('nav .profile');
// const imgProfile = profile.querySelector('img');
// const dropdownProfile = profile.querySelector('.profile-link');

// imgProfile.addEventListener('click', function () {
// 	dropdownProfile.classList.toggle('show');
// })




// // MENU
// const allMenu = document.querySelectorAll('main .content-data .head .menu');

// allMenu.forEach(item=> {
// 	const icon = item.querySelector('.icon');
// 	const menuLink = item.querySelector('.menu-link');

// 	icon.addEventListener('click', function () {
// 		menuLink.classList.toggle('show');
// 	})
// })



// window.addEventListener('click', function (e) {
// 	if(e.target !== imgProfile) {
// 		if(e.target !== dropdownProfile) {
// 			if(dropdownProfile.classList.contains('show')) {
// 				dropdownProfile.classList.remove('show');
// 			}
// 		}
// 	}

// 	allMenu.forEach(item=> {
// 		const icon = item.querySelector('.icon');
// 		const menuLink = item.querySelector('.menu-link');

// 		if(e.target !== icon) {
// 			if(e.target !== menuLink) {
// 				if (menuLink.classList.contains('show')) {
// 					menuLink.classList.remove('show')
// 				}
// 			}
// 		}
// 	})
// })





// // PROGRESSBAR
// const allProgress = document.querySelectorAll('main .card .progress');

// allProgress.forEach(item=> {
// 	item.style.setProperty('--value', item.dataset.value)
// })






// // APEXCHART
// var options = {
//   series: [{
//   name: 'series1',
//   data: array,
// //   data: data
// //   data: [31, 40, 28, 51, 42, 109, 100]
// }, {
//   name: 'series2',
//   data: [11, 10, 13, 6, 3, 5, 7, 5, 9, 2]
// }],
//   chart: {
//   height: 350,
//   type: 'area'
// },
// dataLabels: {
//   enabled: false
// },
// stroke: {
//   curve: 'smooth'
// },
// xaxis: {
//   type: 'datetime',
//   categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
// },
// tooltip: {
//   x: {
//     format: 'dd/MM/yy HH:mm'
//   },
// },
// // };

// new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
const apiUrl = 'http://localhost:3000/api/data'
fetch(apiUrl)
      .then(response => response.json())
      .then(data => {

        // for intensity
       const intensity=data.intensity
      
      var d1 = 0, d2 = 0, d3 = 0, d4 = 0, d5 = 0, 
      d6 = 0, d7 = 0, d8 = 0, d9 = 0, d10 = 0, d11 = 0,
      d12 = 0, d13 = 0, d14 = 0, d15 = 0;
      intensity.forEach(element => {
        if(element==2){
          d1++
        }
        else if(element==6){
          d2++
        }
        else if(element==60){
          d3++
        }
        else if(element==16){
          d4++
        }
        else if(element==12){
          d5++
        }
        else if(element==9){
          d6++
        }
        else if(element==72){
          d7++
        }
        else if(element==18){
          d8++
        }
        else if(element==8){
          d9++
        }
        else if(element==4){
          d10++
        }
        else if(element==3){
          d11++
        }
        else if(element==24){
          d11++
        }
        else if(element==1){
          d12++
        }
        else if(element==48){
          d13++
        }
        else if(element==null){
          d14++
        }
      });
    
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: [2,6,60,16,112,9,72,18,8,4,3,24,1,48],
            datasets: [{
              label: ['Intensity'],
              data: [d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14],
              fill: true,
              borderColor: 'violet',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      const likelihood = data.likelihood
      var i1=0,i2=0,i3=0,i4=0,i5=0;
      likelihood.forEach(element=>{
        if(element == 2 ){
          i1++
        }else if(element==3){
          i2++
        }else if(element == 4){
          i3++
        }else if(element==1){
          i4++
        }else if(element==null){
          i5++
        }
      })

        const ctx1=document.getElementById("Chart2").getContext('2d')
        new Chart(ctx1,{
          type: 'line',
          data:{
            labels: [2,3,4,1,null],
            datasets:[{
              label:['likelihood'],
              data: [i1,i2,i3,i4,i5],
              fill: false,
              backgroundColor:['black'],
              borderColor: 'coral',  
              
            }]
          }
          
        })
        const relevance = data.relevance
        var r1=0, r2=0,r3=0, r4=0, r5=0, r6=0,r7=0;
        relevance.forEach(element=>{
          if(element == 1){
            r1++
          }else if(element==2){
            r2++
          }else if(element == 3){
            r3++
          }else if(element==5){
            r4++
          }else if(element==4){
            r5++
          }else if(element==6){
            r6++
          }else if(element==null){
            r7++
          }
        })

        const ctx2=document.getElementById("Chart3").getContext('2d')
        new Chart(ctx2,{
          type: 'pie',
          data:{
            labels: [1,2,3,5,4,6,null],
            datasets:[{
              label: 'relevance',
              data: [r1,r2,r3,r4,r5,r6,r7],
              backgroundColor:['black',
              'lightblue',
              'coral',
              'rgba(255, 99, 132)',
              'rgba(255,0,255,0.3',
              'rgba(192,192,192,0.3)',]
            }]
          }
        })
        const year= data.year
        var y1=0,y2=0,y3=0,y4=0,y5=0,y6=0;
        year.forEach(element=>{
          if(element == "" ){
            y1++
          }else if(element==2025){
            y2++
          }else if(element == 2020){
            y3++
          }else if(element==2017){
            y4++
          }else if(element==2016){
            y5++
          }else if(element==2018){
            y6++
          }
        })
  
          const ctx3=document.getElementById("Chart4").getContext('2d')
          new Chart(ctx3,{
            type: 'doughnut',
            data:{
              labels: [null,2025,2020,2017,2016,2018],
              datasets:[{
                label:['year'],
                data: [y1,y2,y3,y4,y5,y6],
                fill: false,
                backgroundColor:['lightyellow',
                'lightblue',
                'coral',
                'rgba(255, 99, 132)',
                'rgba(255,0,255,0.3',
                'rgba(192,192,192,0.3)'],
                borderColor: 'black',  
                
              }]
            }
            
          })
          const country=data.country
      
          var c1 = "", c2 = "", c3 = "", c4 = "", c5 = "", 
          c6 = "", c7 = "", c8 = "", c9 = "", c10 = "", c11 = "",
          c12 = "", c13 = "", c14 = "", c15 = "",c16="",c17="",
          c18="",c19="",c20="";
          country.forEach(element => {
            if(element=="Syria"){
              c1++
            }
            else if(element==""){
              c2++
            }
            else if(element=="United Ststes Of America"){
              c3++
            }
            else if(element=="Mexico"){
              c4++
            }
            else if(element=="Mali"){
              c5++
            }
            else if(element=="South Africa"){
              c6++
            }
            else if(element=="India"){
              c7++
            }
            else if(element=="Saudi Arabia"){
              c8++
            }
            else if(element=="China"){
              c9++
            }
            else if(element=="Libya"){
              c10++
            }
            else if(element=="Iran"){
              c11++
            }
            else if(element=="Venezuela"){
              c11++
            }
            else if(element=="Germany"){
              c12++
            }
            else if(element=="Egypt"){
              c13++
            }
            else if(element=="United Kingdom"){
              c14++
            }
            else if(element=="Cyprus"){
              c15++
            }
            else if(element=="Iraq"){
              c16++
            }
            else if(element=="Nigeria"){
              c17++
            }
            else if(element=="Russia"){
              c18++
            }
            else if(element=="Brazil"){
              c19++
            }
            else if(element=="Malaysia"){
              c20++
            }
          });
        
            const ctx4 = document.getElementById('Chart5').getContext('2d');
            new Chart(ctx4, {
              type: 'bar',
              data: {
                labels: ['Syria',"","United States Of America","Mexico","Mali","South Africa","China","Libya",
              "Iran","Venezuela","Germany","Egypt","United Kingdom","Cyprus","Iraq","Nigeria","Russia",
              "Brazil","Malaysia"],
                datasets: [{
                  label: ['Country'],
                  data: [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20],
                  fill: true,
                  borderColor: 'violet',
                  borderWidth: 1
                }]
              },
              options: {
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }
            });
            const topic=data.topics
      
          var t1 = "", t2 = "", t3 = "", t4 = "", t5 = "", 
          t6 = "", t7 = "", t8 = "", t9 = "", t10 = "", t11 = "",
          t12 = "", t13 = "", t14 = "", t15 = "",t16="",t17="",
          t18="",t19="",t20="";
          country.forEach(element => {
            if(element=="oil"){
              t1++
            }
            else if(element==""){
              t2++
            }
            else if(element=="technology"){
              t3++
            }
            else if(element=="production"){
              t4++
            }
            else if(element=="business"){
              t5++
            }
            else if(element=="market"){
              t6++
            }
            else if(element=="gas"){
              t7++
            }
            else if(element=="energy"){
              t8++
            }
            else if(element=="export"){
              t9++
            }
            else if(element=="security"){
              t10++
            }
            else if(element=="workforce"){
              t11++
            }
            else if(element=="growth"){
              t11++
            }
            else if(element=="gasoline"){
              t12++
            }
            else if(element=="economic"){
              t13++
            }
            else if(element=="transportation"){
              t14++
            }
            else if(element=="population"){
              t15++
            }
            else if(element=="car"){
              t16++
            }
            else if(element=="money"){
              t17++
            }
            else if(element=="gdp"){
              t18++
            }
            else if(element=="vehicle"){
              t19++
            }
            else if(element=="power"){
              t20++
            }
          });
        
            const ctx5 = document.getElementById('Chart6').getContext('2d');
            new Chart(ctx5, {
              type: 'radar',
              data: {
                labels: ['oil',"","technology","production","business","market","gas","energy",
              "export","security","workforce","growth","gasoline","economic","transportation","population","car",
              "money","gdp","vehicle","power"],
                datasets: [{
                  label: ['Topic'],
                  data: [t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20],
                  fill: false,
                  borderColor: ['violet','lightblue',
                  'coral',
                  'rgba(255, 99, 132)',
                  'rgba(255,0,255,0.3',
                  'rgba(192,192,192,0.3)'],
                  borderWidth: 1
                }]
              },
              options: {
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }
            });

      });




