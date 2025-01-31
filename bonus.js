const { nums, words } = require("./data/data.js");
const  { panagram, products} = require("./data/bonusData.js")
//  Hungry for More
/* 
Reduce
Add all the numbers in the array together using the reduce method
concatenate all the words using reduce

Sort
Try to sort without any arguments, do you get what you'd expect with the numbers array?
Try to sort without any arguments, do you get what you'd expect with the words array?
Sort the numbers in ascending order
Sort the numbers in descending order
Sort the words in ascending order
Sort the words in descending order
*/

// Reduce
/* 
   - use reduce to concat nested arrays into acc array 
        - arr = [[],[],[],[]]
        - arr2 = arr.reduce((acc, el) => acc.concat(el), [])
*/
function reduceSum(arr) {
    const sum = arr.reduce((acc, el) => {
        return acc += el
    }, 0)
    return sum
}

function reduceStr(arr){
    const string = arr.reduce((acc, el) => {
        return acc += el
    }, "")
    return string
}

// Sort
/* 
     - console.log(words.sort()) -> orders by first letter, capital first ??
    - console.log(nums.sort()) -> orders asc based on first number -> 10, before 9 ??
*/
// compare function for numbers (used w/ both sortNum functions)
function orderNumbers(a, b){
    if(typeof a === "string" && typeof b === "string"){
        return a.toLowerCase() < b.toLowerCase() ? -1 : 1 || 0
        
        // Questions ?? check if same letter, if one capital, order accordingly, or loop through string and compare subsequent letters
    }
  return a < b ? -1 : 1 || 0
}

// Ascending Num
function sortNumAsc(arr){
    arr.sort(orderNumbers)
    return arr
}

// Descending Num
function sortNumDesc(arr){
    arr.sort(orderNumbers).reverse()
    return arr
}

// Ascending Words
/*  
    -just first letter or all letters in word (book after boat) 
    - case sensitive ??? Boat before/ after boat
    */
function sortStrAsc(arr){
    arr.sort(orderNumbers)
    return arr
}

function sortStrDesc(arr){
    arr.sort(orderNumbers).reverse()
    return arr
}

// Array Methods Challenge Problems
// isPanagram
const alphabet = []
for (let i = 0; i <26; i++){
    alphabet.push(String.fromCharCode(97 + i))
}

function isPanagram(arr){
    const letters = [...alphabet]
    arr.forEach(word => {
        const wordArr = word.split('')
        wordArr.forEach(letter => {
            if(letters.includes(letter.toLowerCase())){
                const indexOfLetter = letters.findIndex(val => val === letter.toLowerCase())
                // letters.splice(1, indexOfLetter) <- index positions change everytime, not good
                letters[indexOfLetter] = ""
            }
        } )
    })
    const allLetters = letters.join('').length === 0 ? true : false
    return allLetters
}

function panagram2(arr){
    const wordStr = arr.join('').toLowerCase()
    const alphabetCopy = [...alphabet]
    for (let i = 0; i < wordStr.length ; i++){
        if(alphabetCopy.includes(wordStr[i])){
            const index = alphabetCopy.findIndex(el => el === wordStr[i])
            alphabetCopy[index] = ""
        }
    }
    const leftoverLetters = alphabetCopy.join('').length === 0 ? true : false
    return leftoverLetters
}
// console.log(panagram2(panagram))
// console.log(isPanagram(panagram))

// Working with data
/* 
    - filter for products with a price that is less than 10 
    -  Questions: 
        -return array of product objects? OR list of product name ?
    */
function priceLessThan10(arr){
    const filtered = arr.filter(({price}) => price < 10)
    return filtered
}

// sort alphabetically by product name
function sortProductName(arr){
    arr.sort((a,b) => a.name < b.name ? -1 : 1 || 0 )
    return arr
}
// console.log(sortProductName(products))