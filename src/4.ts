class Key {
  private signature: number;
  constructor() {
    this.signature = Math.round(Math.random() * (10 - 1) + 1);
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tennants: Person[];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
    this.tennants = [];
  }

  comeIn(person: Person) {
    if (this.door) {
      this.tennants.push(person);
      console.log("Welcome home!");
    } else {
      console.log("The door is stil closed");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
