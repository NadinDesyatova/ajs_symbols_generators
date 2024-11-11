export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже существует в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach(character => {
      try {
        this.add(character);
      } catch {
        return;
      }
    });
  } 
    
  toArray() {
    return [...this.members];
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.toArray().length; i++) {
      yield this.toArray()[i];
    }
  }
}
