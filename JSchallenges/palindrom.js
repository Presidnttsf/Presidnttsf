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