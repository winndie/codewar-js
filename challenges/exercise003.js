function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  return nums.map( n => { return n * n });
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  var ans = "";

    words.forEach(
    
        function (word,i){

            if (i==0){
                ans = word.charAt(0).toLowerCase();
                ans += word.substr(1,word.length-1);
              }
            else {
                ans += word.charAt(0).toUpperCase();
                ans += word.substr(1,word.length-1);
              }
        }
    );

  return ans;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  var count = 0;

    people.forEach(

        function (person, i) {
          count = count + person.subjects.length;
        }
    );

  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!

  return menu.some(
      function (menuItem) {
        return menuItem.ingredients.some(
            function (eachIngredient) {
              return eachIngredient == ingredient;
            }
          );
      }
  );
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  var ans = [];

    arr1.forEach(

      function (num1, i) {

        if(
            arr2.some(function(num2){ return num1==num2; }) &&
           !ans.some(function(ansNum){ return num1==ansNum; })
          )
          ans.push(num1);

      }
    );

  return ans.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
