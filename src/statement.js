import format from './services/formats.js';
import calc from './services/calculators.js';

function statement (invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;

    for (let perf of invoice.performances) {
        const play = plays[perf.playID];
        
        let thisAmount = calc.cost.performance(play, perf);

        // add volume credits
        volumeCredits += calc.volumeCredits(perf, play);

        // print line for this order
        result += ` ${play.name}: ${format.usd(thisAmount/100)} (${perf.audience} seats)\n`;
        
        totalAmount += thisAmount;
    }

    result += `Amount owed is ${format.usd(totalAmount/100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;

    return result;
}

export default statement;