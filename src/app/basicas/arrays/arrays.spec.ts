import { getRobots } from './arrays';

describe('try arrays', () => {
    it('3 robots', () => {
        const value = getRobots();
        expect(value.length).toBeGreaterThan(2);
    });
    it('contain MegaMan and Ultron', () => {
        const value = getRobots();
        expect(value).toContain('MegaMan');
        expect(value).toContain('Ultron');
    });
});
