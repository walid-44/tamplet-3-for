let allSkills = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progress span");
// varboll
let section = document.querySelectorAll(".box .number");
let statsSection = document.querySelector(".stats");
let started = false;






window.onscroll = function(){

  if(window.scrollY >= allSkills.offsetTop - 200){
    
    spans.forEach((span) =>{
      span.style.width = span.dataset.width;
    });
  }

  if(window.scrollY >= stats.offsetTop - 200){
    if(!started){
      section.forEach((num) => startCount(num));
        
    }
    started = true;
  }

};


let countDownData = new Date("july 1, 2023 23:59:59").getTime();


let counter = setInterval(() => {

  let dataNow = new Date().getTime() ;

  let dateDiff = countDownData - dataNow ;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 *24));
  
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 *60 )) ;
  
  let minute = Math.floor((dateDiff % (1000 * 60 * 60)) /(1000 * 60));

  let second = Math.floor((dateDiff % (1000 * 60 )) /(1000));

  
  
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}`:days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`:hours;
  document.querySelector(".minute").innerHTML = minute < 10 ? `0${minute}`:minute;
  document.querySelector(".second").innerHTML = second < 10 ? `0${second}`:second;

  if(dateDiff < 0){
    clearInterval(counter);
  }
  
},1000);




function startCount(el){
  let goal = el.dataset.goal;
  let count = setInterval(() =>{
    el.textContent++;
    if( el.textContent == goal){
      clearInterval(count);

    }
  }, 2000 / goal)
}

