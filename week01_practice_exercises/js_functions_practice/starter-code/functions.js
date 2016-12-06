// Question 1
function maxOfTwoNumbers(x, y) {
  if (x>y){
    return x;
  } else {
    return y
  }
}

// Question 2
function maxOfThree(x, y, z) {
  var biggest = x;
  var threeNums = [x, y, z];
  for (var i = 0; i<threeNums.length; i++){
    if (biggest<threeNums[i]){
      biggest = threeNums[i];
    };
  };
  return biggest;
}

// Question 3
function isCharacterAVowel(char) {
  var vowels = "aeiouy";
  for (var i=0; i<vowels.length; i++){
    if (vowels[i] === char){
      return true;
    };
  }
  return false;
}

// Question 4
function sumArray(numArray) {
  var sum = 0;
  for(var i=0; i<numArray.length; i++){
    sum += numArray[i];
  }
  return sum;
}


// Question 4
function multiplyArray(numArray) {
  var multiplied = 1;
  for(var i = 0; i<numArray.length; i++){
    multiplied *= numArray[i];
  };
  return multiplied;
}

// Question 5
var numberOfArguments = function(args){
  return arguments.length
};


// Question 6
var reverseString = function (string){
  var newString = "";
  for(var i = (string.length)-1; i<=0; i--){
    newString.push(string[i]);
  };
  return newString;
};


// Question 7
function findLongestWord (wordArray) {
  var longestWord = '';
  for(var i=0; i<wordArray.length; i++){
    if(longestWord.length < wordArray[i].length){
      longestWord = wordArray[i];
    };
  };
  return longestWord.length
}


// Question 8
function filterLongWords (wordArray, i) {
  var longWords = [];
  for(var x=0; x<wordArray.length; x++){
    if (wordArray[x].length > i) {
      longWords.push(wordArray[x]);
    };
  };
  return longWords;
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}

