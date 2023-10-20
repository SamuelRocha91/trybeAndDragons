import Fighter from '../Fighter';

abstract class Battle {
  constructor(protected player: Fighter) { }

  fight(): number {
    return Number(this.player.lifePoints) === -1 ? -1 : 1;
  }
}

export default Battle;
