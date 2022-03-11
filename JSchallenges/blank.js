function isPalindrom(text) {
    let start = [];
    let reverse = [];

    // for (let index = 0; index < text.length; index++) {
    // start = text[index];
    start = text;
    // reverse = text[text.length - 1 - index];
    reverse = text.split('').reverse().join("");
    console.log(start, reverse)
    // }
    if (start != reverse) {
        return 'It is not palindrome.'

    } else return 'It is palindrome.'



}

console.log(isPalindrom('madam'));
console.log(isPalindrom('text'));
console.log(isPalindrom('redivider'));
console.log(isPalindrom('tauseef'));