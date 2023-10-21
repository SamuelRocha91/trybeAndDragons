import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player1: Character | Fighter,
    private _player2: Fighter[] | SimpleFighter[],
  ) {
    super(_player1);
  }

  fight(): number {
    while (this._player1.lifePoints >= 0 && this._player2.length > 0) {
      const len = this._player2.length;
      const random = Math.floor(Math.random() * len);

      this._player1.attack(this._player2[random]);
      this._player2[random].attack(this._player1);
 
      if (this._player2[random].lifePoints < 0) {
        this._player2.splice(random, 1);
      }
    }
  
    return super.fight();
  }
}