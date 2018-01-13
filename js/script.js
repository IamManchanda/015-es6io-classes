/**
 * JS
 */

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log(`Bark bark! My name is ${this.name}`);
  }

  getBreed() {
    console.log(`My breed is ${this.breed}`);
  }

  static info() {
    console.log('A dog is better than a cat by 10 times');
  }

  get description() {
    return `${this.name} is a ${this.breed} type of dog`;
  }

  set nicknames(value) {
    this.nick = value.trim();
  }

  get nicknames() {
    return this.nick.toUpperCase();
  }
}

const snickers = new Dog('Snickers', 'King Charles');
const sunny = new Dog('Sunny', 'Golden Doodle');
