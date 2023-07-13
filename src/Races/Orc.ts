import Race from './Race';

export default class Orc extends Race {
  lifePoints: number;
  constructor(
    readonly _name: string,
    readonly _dexterity: number,
  ) {
    super('Orc', 74);
    this.lifePoints = 74;
  }
  
  get name() { return this._name; }
  
  get dexterity() { return this._dexterity; }
  
  get maxLifePoints(): number {
    return this.lifePoints;
  }
  
  private static numberRacesInstances = 0;
  static createdRacesInstances(): number {
    Orc.numberRacesInstances += 1;
    const instances = Orc.numberRacesInstances;
    return instances;
  }
} 