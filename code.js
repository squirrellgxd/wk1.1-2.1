//Wk1-2 count down should run 10....1 then blastoff
function StartCountdown() {
var count = 10;
//count down timer should display 10
document.getElementById("countdownTimer").innerHTML = count;
count = count-1;

setTimeout(fuction(){
  //after 1sec,will run code here
//the countdown timer should display
document.getElementById("countdownTimer").innerHTML = count;
count = count -1;
},1000);

setTimeout(funtion(){
document.getElementById("countdownTimer").innerHTML =  count;
count = count-1;
}, 2000);

setTimeout(funtion(){
document.getElementById("countdownTimer").innerHTML =  count;
count = count-1;
}, 3000);

setTimeout(funtion(){
document.getElementById("countdownTimer").innerHTML =  count;
count = count-1;
}, 4000);

setTimeout(funtion(){
document.getElementById("countdownTimer").innerHTML =  count;
count = count-1;
}, 6000);

setTimeout(funtion(){
document.getElementById("countdownTimer").innerHTML =  count;
count = count-1;
}, 7000);

setTimeout(funtion(){
document.getElementById("countdownTimer").innerHTML =  count;
count = count-1;
}, 8000);

setTimeout(funtion(){
document.getElementById("countdownTimer").innerHTML =  count;
count = count-1;
}, 9000);

setTimeout(funtion(){
document.getElementById("countdownTimer").innerHTML = "Blastoff!!";
}, 10000);
}

// function to play craps
function playCraps(){
  console.log("playCraps has started");
  var die1;
  die1 = Math.ceil(Math.random() * 6);
  console.log("The value of die1 is:" + die1);
var die20;
  die20 = Math.ceil(Math.random() * 20);
  console.log("The value of die20 is:" + die20);
}
