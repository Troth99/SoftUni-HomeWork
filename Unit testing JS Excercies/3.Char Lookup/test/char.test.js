import { lookupChar } from '../charLookup.js'
import { expect } from 'chai'

describe('lookupChar', () => {

    it('Should return "Undefiend" if the first element is not a string', () => {
        expect(lookupChar(undefined, 3)).to.equal(undefined)
        expect(lookupChar({}, 2)).to.equal(undefined);
        expect(lookupChar([], 2)).to.equal(undefined);
     
    });
    it('Should return undefined if second argument is not an integer', () => {
        expect(lookupChar('test', '2')).to.equal(undefined);
        expect(lookupChar('test', 2.5)).to.equal(undefined);
        expect(lookupChar('test', undefined)).to.equal(undefined);
    });

    it('Should return "Incorrect index" if the index is negative', () => {
        expect(lookupChar('hello', -1)).to.equal('Incorrect index');
    });

    it ('Should return "Incorrect index" if index is out of range', () => {
        expect(lookupChar('asd', 4)).to.equal('Incorrect index')
    });
   it ('Shoulrd return correct result', () => {
    expect(lookupChar('Hello', 1)).to.equal('e')
   })

})