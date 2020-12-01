function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return (person.city == "Manchester");
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  return Math.ceil( people / 40 );
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  return arr
          .reduce( (acc, val) => { 
              
              if(val == "sheep")
                acc++;

              return acc; 
            }, 0
          );
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  return (person.address.postCode.charAt(0) == "M" && person.address.city == "Manchester");
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
