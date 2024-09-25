import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  constructor() {
    super('Mage');
    this._energyType = 'mana';
    Mage.createdArchetypeInstances();
  }

  private static numberArchetypeInstances = 0;
  static createdArchetypeInstances(): number {
    Mage.numberArchetypeInstances += 1;
    const instances = Mage.numberArchetypeInstances;
    return instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;