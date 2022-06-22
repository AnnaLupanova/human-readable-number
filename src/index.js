module.exports = function toReadable(number) {

    let one_nine = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let ten_nineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let twenty_ninety = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    str = ''
    if (number.toString().length === 3) {
        hundred = one_nine[Math.trunc(number / 100) - 1]
        if (number % 100 === 0) {
            str = hundred + ' hundred'
        } else {
            if (parseInt(number.toString().slice(1, 3)) % 10 != 0) {
                if ((parseInt(number.toString().slice(1, 3)) < 20) && (parseInt(number.toString().slice(1, 3)) > 9)) {
                    dozens = ten_nineteen[number.toString().slice(1, 3) - 10]
                } else if ((parseInt(number.toString().slice(1, 3)) < 10)) {
                    dozens = one_nine[number.toString().slice(2) - 1]
                } else {
                    dozens = twenty_ninety[number.toString().slice(1, 2) - 1] + ' ' + one_nine[number.toString().slice(2) - 1]
                }
            } else {
                dozens = twenty_ninety[number.toString().slice(1, 2) - 1]
            }
            str = hundred + ' hundred ' + dozens
        }
    } else if (number.toString().length === 2) {
        if (number % 10 === 0) {
            str = twenty_ninety[number.toString().slice(0, 1) - 1]
        } else {
            if (number > 10 && number < 20) {
                str = ten_nineteen[number.toString().slice(1)]
            }
            else if (number > 20) {
                str = twenty_ninety[number.toString().slice(0, 1) - 1] + ' ' + one_nine[number.toString().slice(1) - 1]
            }
        }
    } else if (number.toString().length === 1) {
        if (number === 0) {
            str = 'zero'
        } else {
            str = one_nine[number.toString() - 1]
        }
    }
    return str
}
