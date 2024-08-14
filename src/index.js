module.exports = function toReadable(number) {
    const ones = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine'
    ];
    
    const teens = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    
    const tens = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if (number < 10) {
        return ones[number];
    }

    if (number < 20) {
        return teens[number - 10];
    }

    if (number < 100) {
        let tenPart = Math.floor(number / 10);
        let onePart = number % 10;
        return onePart === 0 ? tens[tenPart] : `${tens[tenPart]} ${ones[onePart]}`;
    }

    if (number < 1000) {
        let hundredPart = Math.floor(number / 100);
        let remainder = number % 100;
        let hundredText = `${ones[hundredPart]} hundred`;
        if (remainder === 0) {
            return hundredText;
        } else {
            return `${hundredText} ${toReadable(remainder)}`;
        }
    }

    return ''; 
};