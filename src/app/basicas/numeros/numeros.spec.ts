import { incrementar } from './numeros';


describe('number try', () => {
    it('return 100 if num>100', () => {
        const value = incrementar(101);
        expect(value).toBe(100);
    });
    it('return num+1 if num<100', () => {
        const num = 10;
        const value = incrementar(num);
        expect(value).toBe(num + 1);
    });
});