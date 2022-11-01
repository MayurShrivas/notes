/* 
* Ques. -> Write a function to Check word "Kayak" is a Palindrom string or not.
*/

//let word = "kayak"; //we took a string

function CheckPalindrome(word) {
    let wordLength = Math.floor(word.length / 2); // Half lenght of the string 

    for(let i = 0; i < wordLength; i++) {
        if (word [i] != word [word.length - 1- i]) return false; //Termination
    }
    return true;
}

let result = CheckPalindrome ("kayak");
console.log (result);


