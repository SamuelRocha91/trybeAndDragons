import Archetype, { Mage, Necromancer, Ranger, Warrior } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Dwarf, Elf, Halfling, Orc } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  readonly _energy: Energy;
  private _name: string;

  constructor(name: string, nameRace?: string, nameArchetype?: string) {
    this._name = name;
    this._dexterity = Math.round(Math.random() * 10) + 1;
    this._race = Character.defineRace(nameRace || 'Elf', name, this._dexterity);
    this._archetype = Character.defineArchetype(nameArchetype || 'Mage', name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._defense = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(0, 10),
    };
  }

  static defineRace(race: string, name: string, dexterity: number): Race {
    if (race === 'Dwarf') {
      return new Dwarf(name, dexterity);
    } 
    if (race === 'Halfling') {
      return new Halfling(name, dexterity);
    } 
    if (race === 'Orc') {
      return new Orc(name, dexterity);
    }
    return new Elf();
  }

  static defineArchetype(archetype: string, name: string): Archetype {
    if (archetype === 'Necromancer') {
      return new Necromancer(name);
    } 
    if (archetype === 'Ranger') {
      return new Ranger(name);
    } 
    if (archetype === 'Warrior') {
      return new Warrior(name);
    }
    return new Mage(name);
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    const energy = this._energy;
    return {
      ...energy,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    return this._lifePoints > 0 ? this._lifePoints : -1;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    if (this._lifePoints > this._race.maxLifePoints) {
      this._lifePoints = this._race.maxLifePoints;
    }
  }

  printCharacterInfo(): string {
    // eslint-disable-next-line max-len
    return `${this._name} é um ${this._archetype.name} da raça ${this._race}:
    Possui ${this._lifePoints} de vida e ${this._strength} de força`;
  }
}