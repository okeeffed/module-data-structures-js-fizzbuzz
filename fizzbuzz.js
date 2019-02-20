let fizzBuzz = (i) => {
    switch (true) {
        case i % 3 === 0 && i % 5 === 0:
            return 'fizzbuzz';
        case i % 3 === 0:
            return 'fizz';
        case i % 5 === 0:
            return 'buzz';
        default:
            return i;
    }
};

module.exports = {
    fizzBuzz
}