const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  let i = nums.indexOf(n) + 1;

    if ( i == 0 || i == nums.length)
      return null;
    else
      return nums[i];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  let count = new Map();
      count.set(0,0);
      count.set(1,0);

    str.split("").forEach( s => {

        if(s == 0)
          count.set(0,count.get(0) + 1);
        else if(s == 1)
          count.set(1,count.get(1) + 1);

    });

  return Object.fromEntries(count);
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  return parseInt(n.toString().split("").reverse().join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  let sum = 0;

      arrs.forEach( arr => {
            sum += arr.reduce( (b,val) => {
                return b + val;
                });
            });

  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

  let zrr = arr.slice();

    if(arr.length > 1){
      zrr[0] = arr[arr.length-1];
      zrr[arr.length-1] = arr[0];
    }

  return zrr; 
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  let searchTermLower = searchTerm.toLowerCase();

  return  Object.values(haystack).some(
              val => {            
                return (val.toString().toLowerCase().search(searchTermLower) > -1);        
          });
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  let arr = str.toLowerCase().replace(/[^a-z ]/g, '').split(" ");
  let set = new Set(arr);
  let map = new Map();

      set.forEach(
        setVal => {
          let count = 0;

          arr.forEach(
            arrVal => {
              if(setVal == arrVal)
                count++;
            });

          map.set(setVal,count);
        });

  return Object.fromEntries(map);
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
