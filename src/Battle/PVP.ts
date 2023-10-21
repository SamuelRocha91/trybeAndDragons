import Character from '../Character';
import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(
    private _player1: Character | Fighter,
    private _player2: Character | Fighter,
  ) {
    super(_player1);
  }

  fight(): number {
    while (this._player1.lifePoints >= 0 && this._player2.lifePoints >= 0) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }
    return super.fight();
  }
}