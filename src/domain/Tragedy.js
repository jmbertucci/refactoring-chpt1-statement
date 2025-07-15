import Play from './Play.js';

export default class Tragedy extends Play {
  static BASE_COST = 40000;
  static AUDIENCE_THRESHOLD = 30;
  static AUDIENCE_COST_MULTIPLIER = 1000;

  constructor(name) {
    super(name);
  }

  calculateCost(audience) {
    let cost = Tragedy.BASE_COST;

    if (audience > Tragedy.AUDIENCE_THRESHOLD) {
      cost += Tragedy.AUDIENCE_COST_MULTIPLIER * (audience - Tragedy.AUDIENCE_THRESHOLD);
    }

    return cost;
  }

  calculateVolumeCredits(audience) {
    return Math.max(audience - 30, 0);
  }
}