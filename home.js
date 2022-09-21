
// place holder for database
var isPaused = false;
var pick=1;
var playerList = ["Trayvon Walker",
"Aidan Hutchison", 
"Sauce Gardner", 
"Derek Stingley", 
"Zion Johnson",
"Kenney Picket",
"Garrett Wilson", 
"Chris Olave",
"Traylon Burks", 
"Jameson Williams"];
var teamList = ["Jaguars", "Lions" , "Texans", "Jets", "Giants", "Panthers", "Giants", "Falcons", "Seahawks", "Jets"];
var teamCount = 0;
var playerCount = 10;
// Set the date we're counting down to
var countDownDate = new Date().getTime();
countDownDate+=30000;
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   var formattedNumber = ("0" + seconds).slice(-2);
  // Output the result in an element with id="demo"
  document.getElementById("Time").innerHTML = minutes + ":" + formattedNumber;
  document.getElementById("Team").innerHTML = teamList[teamCount] + " are on the Clock";
  // If the count down is over, write some text 
  if (distance <=0) {
  document.getElementById("Time").innerHTML = "Pick is in";
   endgame();
  }
}, 1000);



function pause(){
var secondsleft = seconds;
if(isPaused){
document.getElementById("pausebtn").textContent = "||";
isPaused = false;
}
else{
document.getElementById("pausebtn").textContent = secondsleft;
isPaused = true;
var secondsleft = seconds;
}
}




//function for when the skip or timer ends
function endgame(){
 //choose a random player to display as the pick
    let player = pick;
    playerCount--;
    teamCount++;
    document.getElementById("Pick").innerHTML = playerList[player];
    //sleep for 5 seconds
   document.getElementById("Pick").innerHTML = "";
    document.getElementById("Previous").innerHTML = "Previouse Pick: "+ playerList[player];
    document.getElementById("playername").innerHTML = playerList[player];
    document.getElementById(pick).innerHTML += playerList[player];
    pick++;
    countDownDate = new Date().getTime();
     countDownDate+=30000;
}
