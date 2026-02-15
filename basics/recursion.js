// question 1:- find factorial of n;
function findFactorial(n) {
  if (n <= 0) return 1;
  return n * findFactorial(n - 1);
}

console.log(findFactorial(5));

// question 2:- create an array with range of numbers;
// input :- start-1, end=5 ->>>

function rangeNums(start, end) {
  if (end < start) {
    return [];
  } else {
    const numbers = rangeNums(start, end - 1);
    numbers.push(end);
    return numbers;
  }
}

console.log(rangeNums(0, 5));

// question 3:- given an int x, return true if x is a palindrome and false otherwise
// x = 121 --->> output = true;

function findPalindrome(int) {
  if (int < 0) return false;
  const str = int.toString();
  function check(left, right) {
    if (left >= right) return true;
    if (str[left] != str[right]) return false;
    return check(left + 1, right - 1);
  }

  return check(0, str.length - 1);
}

console.log(findPalindrome(10));

// question 4:- fibonaci using recursion
// n = 4; output = 3

function fibRecursion(n) {
  if (n <= 1) return n;
  return fibRecursion(n - 1) + fibRecursion(n - 2);
}

console.log("fib using recusrion", fibRecursion(5));

// question5:- reverse a string
// input "hello"; output="olleh"

function reverseStr(str) {
  if (str.length == 0 || str == "") return "";
  return reverseStr(str.substring(1)) + str.charAt(0);
}

console.log(reverseStr("hello"));

// question 6:- Subsets(Backtracking algo using recursion)
// Given an integer array nums of unique elements, return all possible subsets(the power set).
// the solution set must not contains duplicates subsets. return the solution in any order.

// input : [1,2,3] ---->> output:- [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
// input : [0]
