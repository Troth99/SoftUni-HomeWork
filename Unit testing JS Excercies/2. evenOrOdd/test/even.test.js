import { expect } from 'chai'
import { isOddOrEven } from '../evenOrOdd.js'
import { assert } from 'console'

describe('evenOrOdd', () => {
    it('Should return if the input of the length is even', () => {
        const inputEven = '12'
        const expected = 'even'
        const result = isOddOrEven(inputEven)
        expect(result).to.equal(expected)   
    })
    it ('Check if the input is odd', () => {
        const inputOdd = '1';
        const expected = 'odd'
        const result = isOddOrEven(inputOdd);
        expect(result).to.equal(expected)
    })
    it ('Check if the input is a undefind', () =>{

       expect(isOddOrEven(5)).to.equal(undefined)
    })

    it('CHeck if the input is a string', () => {
        const isString = '123';
        expect(typeof isString).to.equal('string')
    })
}) 