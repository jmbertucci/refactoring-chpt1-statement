import Comedy from '../domain/Comedy.js';
import Tragedy from '../domain/Tragedy.js';

export default function createPlay(play) { // type: { "name": "Hamlet", "type": "tragedy" }
  switch (play.type) {
    case "comedy":
      return new Comedy(play.name);
    case "tragedy":
      return new Tragedy(play.name);
    default:
      throw new Error(`Unknown play: name [${play.name}], type: [${play.type}]`);
  }
}
