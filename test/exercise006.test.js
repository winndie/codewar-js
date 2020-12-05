const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {

  test("the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([3, 5])).toBe(8);
    expect(sumMultiples([1, 2, 3, 4, 5])).toBe(8);
    expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(33);
  });
});

describe("isValidDNA", () => {

  test("return true/false depending on whether it is a valid DNA string", () => {
    expect(isValidDNA("CGTA")).toBe(true);
    expect(isValidDNA("CGTACCTTGG")).toBe(true);
    expect(isValidDNA("CBGZTXAW")).toBe(false);
    expect(isValidDNA("")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {

  test("return a string of the complementary base pairs", () => {
    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
    expect(getComplementaryDNA("CBGZTXAW")).toBe(null);
    expect(getComplementaryDNA("CGATCAGTGA")).toBe("GCTAGTCACT");
  });
});

describe("isItPrime", () => {

  test("return true/false depending on whether it is a prime number or not", () => {
    expect(isItPrime(7)).toBe(true);
  });
});

describe("createMatrix", () => {

  test("return an array of n arrays", () => {
    expect(createMatrix(2, 'happy')).toStrictEqual([['happy', 'happy'], ['happy', 'happy']]);
  });
});

describe("areWeCovered", () => {

  test("return true/false depending on whether there are enough staff scheduled", () => {
    expect(areWeCovered([
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Amy", rota: ["Thursday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Henry", rota: ["Friday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Kitty", rota: ["Monday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Sunny", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    ], "Tuesday")).toBe(true);
  });
});
