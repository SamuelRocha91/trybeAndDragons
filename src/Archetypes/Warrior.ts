import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  constructor() {
    super('Warrior');
    this._energyType = 'stamina';
    Warrior.createdArchetypeInstances();
  }

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