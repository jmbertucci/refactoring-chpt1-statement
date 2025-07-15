import Play from './Play.js';

export default class Comedy extends Play {
  static BASE_COST = 30000;
  static AUDIENCE_THRESHOLD = 20;
  static AUDIENCE_COST_ADDEND = 10000;
  static AUDIENCE_COST_MULTIPLIER = 500;

  constructor(name) {
    super(name);
  }

  calculateCost(audience) {
    let cost = Comedy.BASE_COST;

    if (audience > Comedy.AUDIENCE_THRESHOLD) {
      cost += Comedy.AUDIENCE_COST_ADDEND + (Comedy.AUDIENCE_COST_MULTIPLIER * (audience - Comedy.AUDIENCE_THRESHOLD));
    }

    cost += 300 * audience;

    return cost;
  }

  calculateVolumeCredits(audience) {
    var credits = Math.max(audience - 30, 0) + Math.floor(audience / 5);
    
    return credits;
  }
}
