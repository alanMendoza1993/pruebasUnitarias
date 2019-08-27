
import { EventEmitter} from '@angular/core';

export class Gamer2 {
    
    hp: number;
    hpCambia = new EventEmitter<number>();
    constructor() {
        this.hp = 100;
    }

    getAttack(power: number) {
        if( power >= this.hp) {
            this.hp = 0;
        } else {
            this.hp -= power; 
        }

        return this.hpCambia.emit(this.hp);
    }
}