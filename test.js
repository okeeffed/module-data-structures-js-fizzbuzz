const lib = require('./fizzbuzz');
// const mocha = require('mocha');
const chai = require('chai');
const {expect} = chai;

describe('fizzbuzz', function () {
    it('should handle fizz', function () {
        expect(lib.fizzBuzz(3))
            .to
            .equal('fizz');
    });

    it('should handle buzz', function () {
        expect(lib.fizzBuzz(5))
            .to
            .equal('buzz');
    });

    it('should handle fizzbuzz', function () {
        expect(lib.fizzBuzz(15))
            .to
            .equal('fizzbuzz');
    });

    it('should handle normal int', function () {
        expect(lib.fizzBuzz(7))
            .to
            .equal(7);

        expect(lib.fizzBuzz(8))
            .to
            .equal(8);
    });
});