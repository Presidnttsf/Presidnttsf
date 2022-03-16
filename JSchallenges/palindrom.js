function checkPalindrom(text) {
    let string = text.split('');
    for (let index = 0; index < text.length; index++) {
        let start = string[index];

        let end = string[text.length - 1 - index]
        if (start == end) {
            return 'It is palindrom'

        }
    }
    return 'It is not palindrom'

}
console.log(checkPalindrom('madams'))

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
    return (start != reverse) ? 'It is not palindrome.' : 'It is palindrome.'



}

console.log(isPalindrom('madam'));
console.log(isPalindrom('text'));
console.log(isPalindrom('redivider'));
console.log(isPalindrom('tauseef'));
