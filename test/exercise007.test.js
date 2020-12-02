const {
    sumDigits
} = require("../challenges/exercise007");

describe("sumDigits", () => {

    test("returns the sum of all its digits", () => {
        expect(sumDigits(123)).toBe(6);
    });

});

