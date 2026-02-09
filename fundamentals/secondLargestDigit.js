var secondHighest = function (s) {
  let largest = -1;
  let secondLargest = -1;

  for (let char of s) {
    if (char >= "0" && char <= "9") {
      const digit = Number(char);

      if (digit > largest) {
        secondLargest = largest;
        largest = digit;
      } else if (digit < largest && digit > secondLargest) {
        secondLargest = digit;
      }
    }
  }

  return secondLargest;
};

secondHighest("dfa12321afd");
