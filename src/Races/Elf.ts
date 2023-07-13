import Race from './Race';

class Elf extends Race {
  lifePoints: number;
  constructor(
    readonly _name: string,
    readonly _dexterity: number,
  ) {
    super('Elf', 99);
    this.lifePoints = 99;
  }
  
  get name() { return this._name; }
  
  get dexterity() { return this._dexterity; }
  
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
