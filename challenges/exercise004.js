function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let ans = [];

  nums.forEach(num => {
    if (num < 1)
      ans.push(num);
  });

  return ans;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  let ans = [];

  names.forEach(name => {
    if (name.charAt(0) == char)
      ans.push(name);
  });

  return ans;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  let ans = [];

  words.forEach(word => {
    if (word.substr(0, 3) == "to ")
      ans.push(word);
  });

  return ans;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  let ans = [];

  nums.forEach(num => {
    if (Number.isInteger(num))
      ans.push(num);
  });

  return ans;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  let cities = [];

  users.forEach(user => {
    cities.push(user.data.city.displayName);
  });

  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.map(n => { return parseFloat(Math.sqrt(n).toFixed(2)) });
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  let ans = [];

  sentences.forEach(sentence => {
    if (sentence.toLowerCase().includes(str.toLowerCase()))
      ans.push(sentence);
  });

  return ans;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  let ans = [];

  triangles.forEach(sides => {
    ans.push(Math.max.apply(null, sides));
  });

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
