import { Gamer2 } from './gamer2';

describe('gamer2', () => {
    let gamer: Gamer2;
    beforeEach(() => gamer = new Gamer2);
    it('emitEvent when getAtack', () => {
        let hpNew = 0;
        gamer.hpCambia.subscribe( hp => {
            hpNew = hp;
        });
        gamer.getAttack(1000);
        expect(hpNew).toBe(0);
    });
    it('emitEvent when getAtack sorvivor', () => {
        let hpNew = 0;
        gamer.hpCambia.subscribe( hp => {
            hpNew = hp;
        });
        gamer.getAttack(30);
        expect(hpNew).toBe(70);
    });
});