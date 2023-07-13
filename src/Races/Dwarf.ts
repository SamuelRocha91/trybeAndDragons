import Race from './Race';

class Dwarf extends Race {
  lifePoints: number;
  constructor(
    readonly _name: string,
    readonly _dexterity: number,
  ) {
    super('Dwarf', 80);
    this.lifePoints = 80;
  }

  get name() { return this._name; }

  get dexterity() { return this._dexterity; }

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