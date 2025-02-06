function firstNonRepeatedChar(str) {
    let charCount = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];  
        if (charCount[char] === undefined) { 
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }

    return null;}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
