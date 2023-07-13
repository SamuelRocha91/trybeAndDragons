import Race from './Race';

export default class Halfling extends Race {
  lifePoints: number;
  constructor(
    readonly _name: string,
    readonly _dexterity: number,
  ) {
    super('Halfling', 60);
    this.lifePoints = 60;
  }
  
  get name() { return this._name; }
  
  get dexterity() { return this._dexterity; }
  
  get maxLifePoints(): number {
    return this.lifePoints;
  }
  
  private static numberRacesInstances = 0;
  static createdRacesInstances(): number {
    Halfling.numberRacesInstances += 1;
    const instances = Halfling.numberRacesInstances;
    return instances;
  }
} 