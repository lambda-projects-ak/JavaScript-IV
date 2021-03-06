/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
  constructor(gameAttributes) {
    this.createdAt = new Date('November 28, 2018 03:24:00');
    this.dimensions = gameAttributes.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(characterAttibutes) {
    super(characterAttibutes);
    this.healthPoints = characterAttibutes.healthPoints;
    this.name = characterAttibutes.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
  death() {
    if (this.healthPoints === 0) {
      return `TEST`;
    }
  }
}

class Humanoid extends CharacterStats {
  constructor(humanoidAttributes) {
    super(humanoidAttributes);
    this.team = humanoidAttributes.team;
    this.weapons = humanoidAttributes.weapons;
    this.language = humanoidAttributes.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});


console.log(mage);
console.log(swordsman);
console.log(archer);
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.




// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.

class Villian extends Humanoid {
  constructor(villianAttributes) {
    super(villianAttributes);
  }
  fireBomb(opponent) {
    console.log(opponent.takeDamage());
    --opponent.healthPoints;
    if (opponent.healthPoints === 0) {
      console.log(opponent.destroy());
    }
  }
}

class Hero extends Humanoid {
  constructor(heroAttributes) {
    super(heroAttributes);
  }
  banjo(opponent) {
    console.log(opponent.takeDamage());
    --opponent.healthPoints;
    if (opponent.healthPoints === 0) {
      console.log(opponent.destroy());
    }
  }
}

const dingus = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 7,
  },
  healthPoints: 25,
  name: 'Ryan',
  team: 'Death to Hero',
  weapons: [
    'Fire'
  ],
  language: 'EvilAF',
});

const josh = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 7,
  },
  healthPoints: 25,
  name: 'Josh',
  team: 'Banjo for Life',
  weapons: [
    'Fire'
  ],
  language: 'EvilAF',
});

console.log(dingus);
console.log(josh);