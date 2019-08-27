import { Gamer } from './class'

describe('try class', () => {
    let gamer = new Gamer();

    afterEach(() => {
        gamer = new Gamer();
    });

    it('if num > 100 return 0', () => {
         const value = gamer.getAttack(101);
        expect(value).toBe(0);
    }); 
    it('if num < 100 return 100-num', () => {
        const num = 25;
        const value = gamer.getAttack(num);
       expect(value).toBe(100 - num);
   }); 
});