/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import { expect } from 'chai';

import minLimit from '../../../../lib/services/commission-fees/limits/minLimit';

describe('/lib/services/commission-fees/limits/minLimit.js', () => {
  describe('Calculated amount (Ca) < min limit (Ml); Should return min limit.', () => {
    it('Should return 200 when Ca = 100, Ml = 200', async () => {
      const result = minLimit(100, { amount: 200 });
      expect(result).to.be.equal(200);
    });
    it('Should return 100 when Ca = 0, Ml = 100', async () => {
      const result = minLimit(0, { amount: 100 });
      expect(result).to.be.equal(100);
    });
    it('Should return 0 when Ca = 0, Ml = 0', async () => {
      const result = minLimit(0, { amount: 0 });
      expect(result).to.be.equal(0);
    });
  });

  describe('Calculated amount (Ca) > min limit (Ml); Should return calculated amount.', () => {
    it('Should return 200 when Ca = 200, Ml = 100', async () => {
      const result = minLimit(200, { amount: 100 });
      expect(result).to.be.equal(200);
    });
    it('Should return 100 when Ca = 100, Ml = 0', async () => {
      const result = minLimit(100, { amount: 0 });
      expect(result).to.be.equal(100);
    });
  });
});
