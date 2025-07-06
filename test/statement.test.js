import statement from '../src/statement';

test('example statement', () => {
    const invoice = require('./invoice.json');
    const plays = require('./plays.json');
    expect(statement(invoice, plays)).toMatchSnapshot();
});

test('statement with new play types', () => {
    const invoice = require('./invoice_new_plays.json');
    const plays = require('./new_plays.json');
    expect(() => {statement(invoice, plays)}).toThrow(/unknown type/);
});