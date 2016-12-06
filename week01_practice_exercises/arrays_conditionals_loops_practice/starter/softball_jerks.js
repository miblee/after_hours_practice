// |||||||||||||||||||||||||||||||||
// ||||||||| SBC JS Drills |||||||||
// |||||||||||||||||||||||||||||||||

// A. ||||||| ARRAY PLAY! |||||||

// 1. Make a roster variable and set it to an array of the players.
console.log("1. The Roster\n")
var players = ["Judy Kim", "Sam Fishinbottom", "Mike Pittz", "Amy Vlor", "Greg Craig", "Craig Greg", "Lex Luger", "Klempt Klarc", "Amit Patel", "Joanne Fabric", "Margaret Kalanchoe", "Lucy Bascetta"];
console.log(players);

console.log("\n");
// 2. Set the batting lineup to the last 9 people on the roster.
console.log("2. The Lineup\n")
var battingLineup = players.slice(3);
console.log(battingLineup);

console.log('\n');
// 3. Make a var batterUp and set it to the first member in the lineup.
//    Then, print to the console the batter's name append with " is up
//    to bat!".
console.log("3. Batter Up!\n")
var batterUp = battingLineup[0];
console.log(batterUp + " is up to bat!");

// B. ||||||| CONDITIONAL POSITIONAL! |||||||

console.log('\n');
// 4. Select "Lex Luger" from the lineup and set him to the var slugger.
//    Then, create a variable onBase and set it to a number between 0
//    and 3. If the value of onBase is 2 or greater, print to the
//    console, "Lex take us home!", otherwise, print "Get us on base
//    Lex!"
console.log('4. Take Us Home, Slugger\n')
var slugger = battingLineup[3];
var onBase = Math.floor(Math.random() * 3);
if (onBase >= 2){
  console.log(slugger + " take us home!");
} else {
  console.log("Get us on base " + slugger + "!");
};

console.log('\n');
// 5. Below is an undefined variable, warmingUp. Create a variable
//    leadingBy and set it to a number. Then, if leadingBy is less than
//    2, set warmingUp to "Sam Fishinbottom". Finally, create a variable
//    pitcher, and set it to the warmingUp var OR the first spot in the
//    roster.
console.log('5. Pitcher or Closer?\n')
var warmingUp;
var leadingBy = Math.floor(Math.random()*5);
if (leadingBy < 2){
  warmingUp = players[1];
};
var pitcher = warmingUp || players[1];
console.log(pitcher);

console.log('\n');
// 6. Create a variable downBy. If the pitcher is Sam Fishinbottom AND
//    downBy is greater than 2, tell Sam to go for the knees. Otherwise,
//    just tell her to strike 'em out.
console.log('6. Dirty Tricks\n')
var downBy = Math.floor(Math.random() * 5);
if (pitcher===players[1] && downBy > 2){
  console.log("Go for the knees, " + players[1] + "!");
} else {
  console.log("Just strike 'em out.");
};

// C. ||||||| LOOP TROOP |||||||
console.log('\n');
// 7. Using a while loop, iterate through the lineup and for each
//    player, print to the console "<player name> is ready to knock it
//    out of the park!"
console.log('7. Run Through the Batting Order\n');
var i = 0;
while(i<players.length){
  console.log(players[i] + " is ready to knock it out of the park!");
  i ++;
}

console.log('\n');
// 8. No one can ever remember which one is Greg and which is Craig. If
//    a player contains "Greg" in their name, the team should fumble
//    when cheering them on. Otherwise, they should cheer: "Let's go
//    <player name>!". Use a for loop!
console.log('8. The Greg Craig Predicament\n');
for(var i = 0; i<players.length; i++){
  if (players[i] == "Greg Craig" || players[i] == "Craig Greg"){
    console.log("Let's go, Gre...Crai... egg?");
  } else {
    console.log("Let's go, " + players[i] + "!");
  };
}

console.log('\n');
// 9. The team is getting new jerseys with names on the back, but the
//    cost of printing a name over 7 characters isn't in the budget.
//    Create an empty array with the name playersCut. Then loop over the
//    roster array and add all players with a last name longer than 7
//    characters and print it to the console.
console.log('9. Long Name Freaks Gotta Go\n');
var playersCut = [];
for(var i=0; i<players.length; i++){
  var splitName = players[i].split(' ');
  if (splitName[1].length > 7){
    playersCut.push(players[i]);
  };
}
console.log(playersCut);
