const {
  sumMultiples
} = require("../challenges/exercise006");

describe("sumMultiples", () => {

  test("return the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([5, 3])).toBe(8);
  });

});

