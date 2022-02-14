//1.  Write a program to check if a string (passed in as an argument) is a palindrome i.e. a word that reads the same backwards as forwards, e.g. madam.

//2. Write a program that takes in an integer as an argument and reverses it i.e. 52 ==> 15 etc

//3. Remove from the array whatever is in the following arguments. Return the remaining values in an array.
//Ex removeSpecific([2,3,4,6,6, 'hello]) == [3,4, 'hello']

//4. An array contains numbers along with -1. Sort the array in ascening order but the place of -1s should not be changed
//e.g.  a = [-1, 150, 190, -1, -1, 160, 180]. sortByHeinght(a) = [-1, 150, 160, -1 ,-1, 180, 190 ]

//5 .Sum All Primes
//Pass in a number to loop upto and add all prime numbers
//for example sumAllPrimes(20) =>  2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77
// Hint: create a separate function to check if the number is prime

// 6. Write a program that takes a string an returns the character that appears the max amount of times.
// For example maxChar(scooter) ==> returns 'o'.
// If there are multiple characters of the max length, return an array of the characters instead
// For example maxChar(zookeeper) ==> retuns ['o', 'e']
// If there are no repeating characters, return null
// For example maxChar(bed) ==> returns null

// 7. Find sum of the sum of two diagonals
// arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]
// Expected output:
// ((1 + 5 + 9) + (3 + 5 + 7)) => 15 + 15 ==> 30

// 8. Write a program that takes two arrays of objects and joins them according to their ids.
// const titles = [
//     { id: 1, title: "Title 1" },
//     { id: 2, title: "Title 2" },
//     { id: 3, title: "Title 3" },
// ];
// const posts = [
//     { id: 1, post: "This is post 1" },
//     { id: 3, post: "This is post 3" },
//     { id: 2, post: "This is post 2" },
// ];
// //Expected output
// [
//     { "id": 1, "title": "Title 1", "post": "This is post 1" },
//     { "id": 2, "title": "Title 2", "post": "This is post 2" },
//     { "id": 3, "title": "Title 3", "post": "This is post 3" }
// ]

// 9. Write a program to group duplicates in an array
// Grouping duplicates in an array
// let arr = [1, 2, 4, 1, 3, 1, 2, 6];
// group(arr);

// Expected outcome: { '1': 3, '2': 2, '3': 1, '4': 1, '6': 1 }
