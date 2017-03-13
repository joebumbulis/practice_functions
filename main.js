// setting up some variables to use for our examples. no need to mess with this:
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];
var instructors = [{
        firstname: 'JD',
        teaches: 'JavaScript'
    },
    {
        firstname: 'Tim',
        teaches: 'JavaScript'
    },
    {
        firstname: 'Brit',
        teaches: 'Ruby'
    },
    {
        firstname: 'Rhonda',
        teaches: 'iOS'
    },
    {
        firstname: 'Gil',
        teaches: 'Java'
    },
    {
        firstname: 'Ben',
        teaches: 'UI'
    },
    {
        firstname: 'Jess',
        teaches: 'JavaScript'
    },
    {
        firstname: 'Will',
        teaches: 'JavaScript'
    },
    {
        firstname: 'Calvin',
        teaches: 'JavaScript'
    },
    {
        firstname: 'James',
        teaches: 'Ruby'
    }
];

///////////////////////////////////////////////////////////////////////////////
//                                                      Explorer Mode                                                                    //
///////////////////////////////////////////////////////////////////////////////

// Write a function called `sum` that takes two parameters and returns the sum
// of those 2 numbers.
// write your code here:
function sum(num, num2) {
    return num + num2;
}

console.log(sum);

// write your console.log/asserts here:
// i've already written some console.logs and console.asserts for you.
// follow this pattern as you work on the rest of these problems.
console.log('sum of 2 and 3 is ', sum(2, 3));
console.assert(sum(2, 3), 5);
console.assert(sum(1, 0), 1);
console.assert(sum(-48, 5), 43);

// -------------------
// Write a function named `avg` that takes 3 parameters and returns the average
// of those 3 numbers.
// write your code here:
function avg(num1, num2, num3) {
    return (num1 + num2 + num3) / 3
}
// write your console.log/asserts here:
console.log(avg(40, 20, 60));
console.assert(avg(50, 40, 90), 60);
console.assert(avg(50, 'dog', 100), 40);

// -------------------
// Write a function called `getLength` that takes one parameter (a string) and
// returns the number of characters in that string
// write your code here:
function getLength(string) {
    return (string.length);
}
// write your console.log/asserts here:
console.log(getLength('Love is not against the law'));
console.log(getLength('math is hard'));

// -------------------
// Write a function called `greaterThan` that takes two parameters and
// returns true if the second parameter is greater than the first. Otherwise
// the function should return false.
// write your code here:
function greaterThan(first, second) {
    if (second > first) {
        return true;
    } else {
        return false;
    }
}
// write your console.log/asserts here:
console.log(greaterThan(1, 9));
console.log(greaterThan(8, 1));
console.assert(greaterThan(1, 9), NaN);

// -------------------
// Write a function called `greet` that takes a single parameter and returns a
// string that is formatted like "Hello, Name!" where *Name* is the parameter
// that was passed in.
// write your code here:
function greet(name) {
    return ('Hello ' + name + '!');
};
// write your console.log/asserts here:
console.log(greet('Joe'));
console.assert(greet('Char'), 'Hello Char!');


// -------------------
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence. Finally the
// function should return that sentence.
// write your code here:
function madlib(w1, w2, w3, w4, w5, w6) {
    return ('Once there was a ' + w1 + ' who ' + w2 + " " + w3 + ' when it ' + w4 + ' for ' + w5 + ' in ' + w6 + '.');
}
// write your console.log/asserts here:
console.log(madlib('aardvark', 'ate', 'glitter', 'snowed', 'days', 'Japan'));
console.assert(madlib('lima', 'grapes', 'sun', 'rained', 'long time', 'USA'), 'Once there was a lima who grapes sun when it rained for long time in USA.');

// -------------------
// Write a function called `max` that returns the larger of two numbers
// write your code here:
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return ('choose two different #\'s')
    }
}
// write your console.log/asserts here:
console.log(max(80, 90));
console.assert(max(40, 40), 'choose two different #\'s');
console.assert(max(100, 1), 100);


// -------------------
// Write a function called `maxOfThree` that returns the largest of three
// numbers
// write your code here:
function maxOfThree(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            return (num1)
        }
    } if (num2 > num1) {
        if (num2 > num3) {
            return (num2)
        }
    } if (num3 > num1) {
        if (num3 > num2) {
            return (num3)
        }
    }
}

// // write your console.log/asserts here:
console.log(maxOfThree(2, 4, 7));
console.assert(maxOfThree(8, 2, 0), 8);

// ---------------------
// Write a function called `isVowel` that receives a single character as a
// parameter and returns true if it is a vowel, false otherwise.
// write your code here:
function isVowel(v){
  if (v === 'a'){
    return (true)
  }
  if (v === 'e'){
    return (true)
  }
  if (v === 'i'){
    return (true)
  }
  if (v === 'o'){
    return (true)
  }
  if (v === 'u'){
    return (true)
  }
  else {
    return (false)
  }
}
// write your console.log/asserts here:
console.log(isVowel('o'));
console.assert(isVowel('u'), true);
console.assert(isVowel('a'), true);
console.assert(isVowel('e'), true);

// ---------------------
// Write a function called `translate` that will translate a text into
// "Rovarspraket". That is, double every consonant and place an occurrence of
// "o" in between. For example, translate("this is fun") should return the
// string "tothohisos isos fofunon".
// write your code here:
function translate(text){
  for (var i = text; i = text.length; text++){
  if (i = 'a'){
    return (i)
  }
  if (i = 'e'){
    return (i)
  }
  if (i = 'i'){
    return (i)
  }
  if (i = 'o'){
    return (i)
  }
  if (i = 'u'){
    return (i)
  }
  else {
    return (i+i+'o')
  }
}
}
// write your console.log/asserts here:
console.log(translate('my lucky stars'));

// ---------------------
// Write a function called `reverse` that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `largest` that takes an array of numbers and returns
// the largest number in the array.
// write your code here:

// write your console.log/asserts here:
console.log('the largest number in the `numbers` array is ', largest(numbers));
console.assert(largest(numbers), 101);

// ---------------------
// Write a function called `longest` that takes an array of strings and returns
// the longest string in the array.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `getEvens` that takes an array of numbers and returns
// a new array with only the even numbers from the original array
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `getOdds` that takes an array of numbers and returns
// a new array with only the odd numbers from the original array
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `containsIs` that takes an array of strings and
// returns a new array with only the strings which contain the substring `is`
// write your code here:

// write your console.log/asserts here:


///////////////////////////////////////////////////////////////////////////////
//                                                      Adventurer Mode                                                              //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `contains` that takes an string AND an array of
// strings and returns a new array with only the strings which contain the
// substring specified string
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `teachersOf` that takes a subject returns only the
// teachers who teach the specified subject.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `objectMatches` that takes 2 strings and an array of
// objects as parameters. The first string is the value to find inside an
// object. The second string string is the key where you want to look for the
// value inside the objects. The array is the array of objects through which to
// search. The function should return a new array of objects that have the
// specified value in the specified key.
// write your code here:

// write your console.log/asserts here:
// console.log('the objects that match javascript teachers are', objectMatches('JavaScript', 'teaches', instructors))

///////////////////////////////////////////////////////////////////////////////
//                                                      Epic Mode                                                                            //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `getAge` that takes a string in one of these formats:
// '12-25-2016' OR '12/25/2016'. If the input is a valid format, it should
// return the years since the date (aka tell how old someone with that birthday
// would be). If the input is invalid OR if the date is after today's date,
// throw an error in the console that describes what the user did wrong when
// calling the function.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `isValidPassword` that takes a string password. If
// the password meets the following criteria return true. otherwise return
// false.
// at least 8 characters
// contains at least one number
// contains at least one of the following: . , ! $ &
// contains at least one capital letter and one lowercase letter
// write your code here:

// write your console.log/asserts here:
