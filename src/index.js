module.exports = function toReadable(number) {
    if (number >= 0 && number < 100) return numToWord(number);
    if (number >= 100) {
        if (number % 100 == 0) {
            return numbersToWords[~~(number / 100)] + " hundred";
        } else
            return (
                numbersToWords[~~(number / 100)] +
                " hundred " +
                numToWord(number % 100)
            );
    }
};

function numToWord(num) {
    if (num < 21) return numbersToWords[num];
    else if (num > 20 && num < 100) {
        if (num % 10 != 0) {
            return (
                numbersToWords[num - (num % 10)] +
                " " +
                numbersToWords[num % 10]
            );
        } else {
            return numbersToWords[num - (num % 10)];
        }
    }
}

let numbersToWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty"
];
numbersToWords[30] = "thirty";
numbersToWords[40] = "forty";
numbersToWords[50] = "fifty";
numbersToWords[60] = "sixty";
numbersToWords[70] = "seventy";
numbersToWords[80] = "eighty";
numbersToWords[90] = "ninety";
