import format from './services/formatsService.js';
import createPlay from './services/playFactory.js';

function statement (invoice, plays) {
    let totalAmount = 0;
    let totalCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;

    for (let perf of invoice.performances) {
        const play = createPlay(plays[perf.playID]);

        const playAmount = play.calculateCost(perf.audience);
        const playCredits = play.calculateVolumeCredits(perf.audience);

        // print line for this order
        result += ` ${play.name}: ${format.usd(playAmount/100)} (${perf.audience} seats)\n`;

        totalCredits += playCredits;
        totalAmount += playAmount;
    }

    result += `Amount owed is ${format.usd(totalAmount/100)}\n`;
    result += `You earned ${totalCredits} credits\n`;

    return result;
}

export default statement;