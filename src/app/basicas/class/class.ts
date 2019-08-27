

export class Gamer {
    
    hp: number;
    
    constructor() {
        this.hp = 100;
    }

    getAttack(power: number) {
        if( power >= this.hp) {
            this.hp = 0;
        } else {
            this.hp -= power; 
        }

        return this.hp;
    }
}