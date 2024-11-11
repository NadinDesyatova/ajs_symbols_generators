import Team from "./team";
import Character from "./character";


const firstCharacter = new Character('Neo', 'Undead');
const secondCharacter = new Character('John', 'Swordsman');

const team = new Team();

team.addAll(firstCharacter, secondCharacter);
const teamIterator = team[Symbol.iterator]();
console.log(teamIterator.next());
console.log(teamIterator.next());
console.log(teamIterator.next());
