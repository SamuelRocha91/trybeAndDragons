import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  get name(): string { return this._name; } 
  get special(): number { return this._special; }
  get cost(): number { return this._cost; }
  private static numberArchetypeInstances = 0;
  static createdArchetypeInstances(): number {
    Warrior.numberArchetypeInstances += 1;
    const instances = Warrior.numberArchetypeInstances;
    return instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;