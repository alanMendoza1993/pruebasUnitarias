import { usuarioIngresado } from './booleanos';


describe('try boolean', () => {
    it('return true', () => {
        const value = usuarioIngresado(false);
        expect(value).toBeTruthy();
    });
});