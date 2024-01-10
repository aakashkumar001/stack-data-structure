// A stack is a list of elements that are accessible only from one end of the list, which is
// called the top. One common, real-world example of a stack is the stack of trays at a
// cafeteria. Trays are always removed from the top, and when trays are put back on the
// stack after being washed, they are placed on the top of the stack. The stack is known as
// a last-in, first-out (LIFO) data structure.

// A Stack Implementation

function stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top - 1];
}

function length() {
  return this.top;
}

function clear() {
  return (this.top = 0);
}

// Usage

var s = new stack();

s.push("oggy");
s.push("doraemon");
s.push("ben10");
s.push("jack");
console.log("length:" + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("popped" + popped);
console.log(s.peek());
s.push("hattori");
s.clear();
s.push("dora");
console.log(s.peek());

// Palindromes
// A palindrome is a word, phrase, or number that is spelled the same forward and back
// ward.

// Determining if a string is a palindrome

function isPalindrome(word) {
  var s = new stack();
  for (var i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  var rword = "";
  while (s.length() > 0) {
    rword += s.pop();
  }
  if (word == rword) {
    return true;
  } else {
    return false;
  }
}

var word = "hello";

if(isPalindrome(word)){
   console.log("it is a palindrome :" + word);
}else {
   console.log("it is not a palindrome :"+ word);
}
 
word = "racecar";

if(isPalindrome(word)){
    console.log("it is a palindrome :" + word);
 }else {
    console.log("it is not a palindrome :"+ word);
 }
 
