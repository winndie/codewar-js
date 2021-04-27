const {
  isPangram
} = require("../challenges/exercise001");

describe("isPangram", () => {
  test("isPangram", () => {
    let sentence = "The quick brown fox jumps over the lazy dog."
    expect(isPangram(sentence)).toBe(true);
  });
});