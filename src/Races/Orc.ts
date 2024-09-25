import Race from './Race';

export default class Orc extends Race {
  lifePoints: number;
  constructor(
    readonly _dexterity: number,
  ) {
    super('Orc', _dexterity);
    this.lifePoints = 74;
    Orc.createdRacesInstances();
  }
  
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