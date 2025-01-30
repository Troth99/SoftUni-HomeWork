import { mathEnforcer } from '../enforcer.js'
import { expect } from 'chai'
describe('mathEnforcer', () => {

    describe('addFive', () => {
        it('Should return undefined if input is not a number', () => {
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
            expect(mathEnforcer.addFive([])).to.equal(undefined);
            expect(mathEnforcer.addFive({})).to.equal(undefined);
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });

        it('Should return the correct result for valid numbers', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(0)).to.equal(5);
            expect(mathEnforcer.addFive(2.5)).to.be.closeTo(7.5, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('Should return undefined if input is not a number', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
            expect(mathEnforcer.subtractTen([])).to.equal(undefined);
            expect(mathEnforcer.subtractTen({})).to.equal(undefined);
            expect(mathEnforcer.subtractTen('10')).to.equal(undefined);
        });

        it('Should return the correct result for valid numbers', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
        });
    });

    describe('sum', () => {
        it('Should return undefined if first argument is not a number', () => {
            expect(mathEnforcer.sum(undefined, 10)).to.equal(undefined);
            expect(mathEnforcer.sum(null, 10)).to.equal(undefined);
            expect(mathEnforcer.sum([], 10)).to.equal(undefined);
            expect(mathEnforcer.sum({}, 10)).to.equal(undefined);
            expect(mathEnforcer.sum('5', 10)).to.equal(undefined);
        });

        it('Should return undefined if second argument is not a number', () => {
            expect(mathEnforcer.sum(10, undefined)).to.equal(undefined);
            expect(mathEnforcer.sum(10, null)).to.equal(undefined);
            expect(mathEnforcer.sum(10, [])).to.equal(undefined);
            expect(mathEnforcer.sum(10, {})).to.equal(undefined);
            expect(mathEnforcer.sum(10, '5')).to.equal(undefined);
        });

        it('Should return the correct sum for valid numbers', () => {
            expect(mathEnforcer.sum(5, 10)).to.equal(15);
            expect(mathEnforcer.sum(-5, -10)).to.equal(-15);
            expect(mathEnforcer.sum(-5, 10)).to.equal(5);
            expect(mathEnforcer.sum(2.5, 3.5)).to.be.closeTo(6, 0.01);
        });
    });

});
