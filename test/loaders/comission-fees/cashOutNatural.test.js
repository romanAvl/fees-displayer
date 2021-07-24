/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import { expect } from 'chai';
import cashOutNatural from '../../../lib/loaders/commission-fees/cashOutNatural';

describe('/lib/loaders/commission-fees/cashOutNatural.js', () => {
  describe('cashOutNatural() test', async () => {
    it('Not-empty data object', async () => {
      const result = await cashOutNatural();
      expect(result).to.be.an('object');
      expect(result).to.be.not.empty;
    });

    it('"percents" property typeof number', async () => {
      const result = await cashOutNatural();
      expect(result).to.have.property('percents').to.be.an('number');
    });
  });
});
