function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.substr(0,1).toUpperCase() + word.substr(1,word.length - 1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  return firstName.substr(0,1).toUpperCase() + "." + lastName.substr(0,1).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  return parseFloat( (originalPrice * ((100 + vatRate) / 100)).toFixed(2) );
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  return parseFloat( (originalPrice * ((100 - reduction) / 100)).toFixed(2) );
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  var ans 

    if ((str.length % 2) == 1)
      ans = str.substr( str.length / 2,1);
    else
      ans = str.substr( (str.length / 2) - 1 ,2);

  return ans;
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!

  var ans="";

    for (var i = word.length-1; i >= 0 ; i--)
      ans += word.substr(i,1);

  return ans;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  var ansList = new Array(words.length);

  for (var j = 0; j < ansList.length; j++){

    var ans="";    

    for (var i = words[j].length-1; i >= 0 ; i--)
      ans += words[j].substr(i,1);

    ansList[j] = ans;

  }

  return ansList;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  const TYPE_LINUX = "Linux";
  var count = 0;

    for (var i = 0; i < users.length ; i++){
      if (users[i].type == TYPE_LINUX)
          count++
    }

    return count
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  var mean = 0;

    for (var i = 0; i < scores.length ; i++)
      mean += scores[i];

  return parseFloat( (mean / scores.length).toFixed(2) );
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!

  if( (n%3) == 0 && (n%5) == 0 )
    return "fizzbuzz";
  
  else if( (n%3) == 0 )
    return "fizz";

  else if( (n%5) == 0 )
    return "buzz";

    return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
