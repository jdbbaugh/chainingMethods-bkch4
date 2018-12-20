const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

integers.sort((a, b) => b - a).filter(num => num < 19).forEach(digit => console.log((digit * 1.5) - 1));


