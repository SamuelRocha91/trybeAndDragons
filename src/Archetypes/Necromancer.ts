import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  constructor() {
    super('Necromancer');
    this._energyType = 'mana';
    Necromancer.createdArchetypeInstances();
  }

  private static numberArchetypeInstances = 0;
  static createdArchetypeInstances(): number {
    Necromancer.numberArchetypeInstances += 1;
    const instances = Necromancer.numberArchetypeInstances;
    return instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;