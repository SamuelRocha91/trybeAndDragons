import Race from './Race';

export default class Halfling extends Race {
  lifePoints: number;
  constructor(
    readonly _dexterity: number,
  ) {
    super('Halfling', _dexterity);
    this.lifePoints = 60;
  }

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