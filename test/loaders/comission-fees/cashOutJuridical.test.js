/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import { expect } from 'chai';
import cashOutJuridical from '../../../lib/loaders/commission-fees/cashOutJuridical';

describe('/lib/loaders/commission-fees/cashOutJuridical.js', () => {
  describe('cashOutJuridical() test', async () => {
    it('Not-empty data object', async () => {
      const result = await cashOutJuridical();
      expect(result).to.be.an('object');
      expect(result).to.be.not.empty;
    });

    it('"percents" property typeof number', async () => {
      const result = await cashOutJuridical();
      expect(result).to.have.property('percents').to.be.an('number');
    });
  });
});
