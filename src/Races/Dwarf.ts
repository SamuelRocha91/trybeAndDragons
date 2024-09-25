import Race from './Race';

class Dwarf extends Race {
  lifePoints: number;
  constructor(
    readonly _dexterity: number,
  ) {
    super('Dwarf', _dexterity);
    this.lifePoints = 80;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  private static numberRacesInstances = 0;
  static createdRacesInstances(): number {
    Dwarf.numberRacesInstances += 1;
    const instances = Dwarf.numberRacesInstances;
    return instances;
  }
}

export default Dwarf;