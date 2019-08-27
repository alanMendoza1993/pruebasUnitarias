import { message } from './string';

/* describe('');

it(''); */

describe('string try', () => {
    it('return string', () => {
       const response1 = message('Alan');
       expect( typeof response1).toBe('string');
    });
    it('return saludos alan', () => {
        const name = 'Alan';
        const response1 = message(name);
        expect(response1).toContain(name);
     });
});
