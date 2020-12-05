const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {

    test("the sum of all its digits", () => {
        expect(sumDigits(123)).toBe(6);
    });
});
  
describe("createRange", () => {

    test("range of numbers as an array", () => {
        expect(createRange(3,11,2)).toBe([3, 5, 7, 9, 11]);
    });
});
    
describe("getScreentimeAlertList", () => {

    test("return an array of usernames", () => {
        expect(getScreentimeAlertList(
            [
               {
                 username: "beth_1234",
                 name: "Beth Smith",
                 screenTime: [
                              { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                              { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                              { date: "2019-05-03", usage: { twitter: 69, instagram: 45, facebook: 19} },
                              { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                             ]
                },
                {
                 username: "sam_j_1989",
                 name: "Sam Jones",
                 screenTime: [
                              { date: "2019-05-03", usage: { mapMyRun: 55, whatsApp: 28, facebook: 35, safari: 10} },
                              { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                              { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                             ]
                },
              ]
            ,"2019-05-03")).toBe(["beth_1234","sam_j_1989"]);
    });
});

describe("hexToRGB", () => {

    test("transform the hex code into an RGB code", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    });
});

describe("findWinner", () => {

    test("return X if player X has won", () => {
        expect(findWinner([
                ["X", "0", null],
                ["X", null, "0"],
                ["X", null, "0"]
            ])).toBe("X");
        });
});
