import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  constructor() {
    super('Ranger');
    this._energyType = 'stamina';
    Ranger.createdArchetypeInstances();
  }

  private static numberArchetypeInstances = 0;
  static createdArchetypeInstances(): number {
    Ranger.numberArchetypeInstances += 1;
    const instances = Ranger.numberArchetypeInstances;
    return instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;