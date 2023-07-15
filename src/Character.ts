import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
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
  constructor(name: string) {
    this._name = name;
    this._dexterity = Math.round(Math.random() * 10) + 1;
    const Elfo: Race = new Elf(name, this._dexterity);
    const mago = new Mage(name);
    this._race = Elfo;
    this._archetype = mago;
    this._maxLifePoints = Elfo.maxLifePoints / 2;
    this._lifePoints = Elfo.maxLifePoints;
    this._defense = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._energy = {
      type_: mago.energyType,
      amount: getRandomInt(0, 10),
    };
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
}