function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var ans = [];

    nums.forEach(

      function (num, i) {
        if( num < 1 )
          ans.push(num);
      }
    );

  return ans;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  var ans = [];

    names.forEach(

      function (name, i) {
        if( name.charAt(0) == char )
          ans.push(name);
      }
    );

  return ans;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  var ans = [];

    words.forEach(

      function (word, i) {
        if( word.substr(0,3) == "to " )
          ans.push(word);
      }
    );

  return ans;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var ans = [];

    nums.forEach(

      function (num, i) {
        if( Number.isInteger(num) )
          ans.push(num);
      }
    );

  return ans;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  var cities = [];

    users.forEach(

      function (user, i) {
          cities.push(user.data.city.displayName);
      }
    );

  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
    return nums.map( n => { return parseFloat( Math.sqrt(n).toFixed(2) ) });
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  var ans = [];

    sentences.forEach(

      function (sentence, i) {
        if( sentence.toLowerCase().includes(str.toLowerCase()) )
          ans.push(sentence);
      }
    );

  return ans;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  var ans = [];

    triangles.forEach(

      function (sides, i) {
          ans.push(Math.max.apply(null,sides));
      }
    );

  return ans;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
