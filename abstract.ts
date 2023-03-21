abstract class Character {
    constructor(public name: string) { }

    abstract talk(): void
    abstract specialMove(): void
}

 class MeleeCharacter extends Character {
    constructor(public name: string, public move: string) {
        super(name);
      }
      talk() { console.log(`${this.name} pode falar.`); }
      specialMove() { console.log(`${this.move}: poderoso ataque especial de curto alcance de, ${this.name}.`); }
}

 class LongRangeCharacter extends Character {
    constructor(public name: string, public move: string) {
        super(name);
      }
      talk() { console.log(`${this.name} pode falar.`); }
      specialMove() { console.log(`${this.move}: poderoso ataque especial a distancia de, ${this.name}.`); }
}

const yoshi = new MeleeCharacter('Yoshi', 'Super dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

yoshi.talk();
yoshi.specialMove();
samus.talk();
samus.specialMove();