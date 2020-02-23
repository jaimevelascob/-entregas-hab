'use strict';
function palindromeFc() {
  let myPalindrome = prompt().toLowerCase();
  myPalindrome = myPalindrome.replace(/ /g, '');
  console.log(myPalindrome);
  for (let i = 0; i < myPalindrome.length; i++) {
    if (myPalindrome[i] != myPalindrome[myPalindrome.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(palindromeFc());
