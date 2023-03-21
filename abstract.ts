abstract class Character {

    abstract talk(): void
    abstract specialMove(): void
    static characterPresentation(character: Character): void { // metodo estatico
        character.talk();
        character.specialMove();
      }
}

 class MeleeCharacter extends Character {
    constructor(public name: string, public move: string) {
        super();
      }
      talk() { console.log(`${this.name} pode falar.`); }
      specialMove() { console.log(`${this.move}: poderoso ataque especial de curto alcance de, ${this.name}.`); }
}

 class LongRangeCharacter extends Character {
    constructor(public name: string, public move: string) {
        super();
      }
      talk() { console.log(`${this.name} pode falar.`); }
      specialMove() { console.log(`${this.move}: poderoso ataque especial a distancia de, ${this.name}.`); }
}

const yoshi = new MeleeCharacter('Yoshi', 'Super dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

// yoshi.talk();
// yoshi.specialMove();
// samus.talk();
// samus.specialMove();

Character.characterPresentation(yoshi); // metodo estatico
Character.characterPresentation(samus);