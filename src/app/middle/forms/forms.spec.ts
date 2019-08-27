import { FormularioRegister } from './forms';
import { FormBuilder } from '@angular/forms';


describe('forms', () => {
    let component: FormularioRegister;
    beforeEach(() => {
        component = new FormularioRegister( new FormBuilder());
    });
    it('2 data', () => {
        expect(component.form.contains('email')).toBeTruthy;
        expect(component.form.contains('password')).toBeTruthy;
    });
    it('email required', () => {
        const control = component.form.get('email');
        control.setValue('');
        expect(control.valid).toBeTruthy;
    })
});