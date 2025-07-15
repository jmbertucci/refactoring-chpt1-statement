export default class Play {
  constructor(name) {
    if (new.target === Play) {
      throw new Error("Play is an abstract class and cannot be instantiated directly."); 
    }

    this.name = name;
  }

  calculateCost(audience) {
    throw new Error(`calculateCost(${audience}) must be implemented by subclass`);
  }

  calculateVolumeCredits(audience) {
    throw new Error(`calculateVolumeCredits(${audience}) must be implemented by subclass`);
  }
}