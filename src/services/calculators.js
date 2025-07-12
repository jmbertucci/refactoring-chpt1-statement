function performance(play, perf) {
    let thisAmount = 0;

    switch (play.type) {
        case "tragedy":
            thisAmount = 40000;
            if (perf.audience > 30) {
                thisAmount += 1000 * (perf.audience - 30);
            }
            break;
        case "comedy":
            thisAmount = 30000;
            if (perf.audience > 20) {
                thisAmount += 10000 + 500 * (perf.audience - 20);
            }
            thisAmount += 300 * perf.audience;
            break;
        default:
            throw new Error(`unknown type: ${play.type}`);
    }

    return thisAmount;
}

function volumeCredits(perf, play) {
    let credits = Math.max(perf.audience - 30, 0);

    // add extra credit for every ten comedy attendees
    if ("comedy" === play.type) credits += Math.floor(perf.audience / 5);

    return credits;
}



export default {
    cost: {
        performance
    },
    volumeCredits,
}