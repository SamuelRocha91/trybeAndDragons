import Race from './Race';

class Elf extends Race {
  lifePoints: number;
  constructor(
    readonly _dexterity: number,
  ) {
    super('Elf', _dexterity);
    this.lifePoints = 99;
  }
  
  get maxLifePoints(): number {
    return this.lifePoints;
  }
  
  private static numberRacesInstances = 0;
  static createdRacesInstances(): number {
    Elf.numberRacesInstances += 1;
    const instances = Elf.numberRacesInstances;
    return instances;
  }
}

export default Elf;
