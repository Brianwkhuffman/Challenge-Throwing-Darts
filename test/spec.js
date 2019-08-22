const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
let scoreCalculator = require('../index')

describe('Throwing Dart Score Calculator', function () {
    it('Collection should be an array of numbers', () => {
        let scoreArr = [1, 2, 11, 7, 5];
        // let scoreArr = { name: 'bri', gender: 'male' }
        let result = scoreCalculator(scoreArr);
        expect(scoreArr).to.be.a('array');
    });
    it('Should return -1 if given an empty parameter', function () {
        let result = scoreCalculator();
        expect(result).to.equal(-1)
    });
    it('Should return a number from valid collection', () => {
        let scoreArr = [1, 2, 11, 7, 5];
        let result = scoreCalculator(scoreArr);
        expect(result).to.be.a('number');
    });
    it('Should return string if invalid collection', () => {
        let scoreArr = [1, 2, 21, 7, 5];
        let result = scoreCalculator(scoreArr);
        expect(result).to.be.a('string');
    })
    describe('Score', () => {
        it('Should return the correct score', () => {
            let scoreArr = [1, 2, 11, 7, 5];
            let result = scoreCalculator(scoreArr);
            expect(result).to.equal(30)
        });
        it('Extra 100 score if collection only has numbers that is less than 5', () => {
            let scoreArr = [1, 2, 3, 4, 3];
            let result = scoreCalculator(scoreArr);
            expect(result).to.equal(150)
        });
        it('Should return 0 if all collection values are higher than 10', () => {
            let scoreArr = [11, 20, 19, 13, 14];
            let result = scoreCalculator(scoreArr);
            expect(result).to.equal(0);
        });
    });
});