const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 10;
export const CORRECT_TYPES = [
  "Bowman", 
  "Swordsman", 
  "Magician", 
  "Daemon", 
  "Undead", 
  "Zombie"
];


export default class Character {
  constructor(name, type) {
    if (!CORRECT_TYPES.includes(type)) {
      throw new Error(`Некорректный тип персонажа, введите одно из следующих значений: ${CORRECT_TYPES.join(", ")}`);
    }
    if (name.length < NAME_MIN_LENGTH || name.length > NAME_MAX_LENGTH) {
      throw new Error(`В имени персонажа должно быть от ${NAME_MIN_LENGTH} до ${NAME_MAX_LENGTH} символов`);
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }
};
