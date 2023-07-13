export default abstract class Race {
  constructor(readonly _name: string, readonly _dexterity: number) { }
  static createdRacesInstances() {
    throw new Error('Not implemented');
  }

  get name() { return this._name; }

  get dexterity() { return this._dexterity; }

  abstract get maxLifePoints(): number;
}
