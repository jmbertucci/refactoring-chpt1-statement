import statement from '../src/statement';

import invoice from './invoice.json' with { type: 'json' };
import invoiceNew from './invoice_new_plays.json' with { type: 'json' };
import plays from './plays.json' with { type: 'json' };
import playsNew from './new_plays.json' with { type: 'json' };

test('example statement', async () => {
    expect(statement(invoice, plays)).toMatchSnapshot();
});

test('statement with new play types', () => {
    expect(() => {statement(invoiceNew, playsNew)}).toThrow(/Unknown play/);
});