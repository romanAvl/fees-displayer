/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import { expect } from 'chai';
import cashIn from '../../../lib/loaders/commission-fees/cashIn';

describe('/lib/loaders/commission-fees/cashIn.js', () => {
  describe('cashIn() test', async () => {
    it('Not-empty data object', async () => {
      const result = await cashIn();
      expect(result).to.be.an('object');
      expect(result).to.be.not.empty;
    });

    it('"percents" property typeof number', async () => {
      const result = await cashIn();
      expect(result).to.have.property('percents').to.be.an('number');
    });
  });
});
