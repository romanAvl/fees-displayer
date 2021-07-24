/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import { expect } from 'chai';

import maxLimit from '../../../../lib/services/commission-fees/limits/maxLimit';

describe('/lib/services/commission-fees/limits/maxLimit.js', () => {
  describe('Calculated amount (Ca) > max limit (Mxl); Should return max limit.', () => {
    it('Should return 200 when Ca = 400, Mxl = 200', async () => {
      const result = maxLimit(400, { amount: 200 });
      expect(result).to.be.equal(200);
    });
    it('Should return 0 when Ca = 1000, Mxl = 0', async () => {
      const result = maxLimit(1000, { amount: 0 });
      expect(result).to.be.equal(0);
    });
    it('Should return 0 when Ca = 0, Mxl = 0', async () => {
      const result = maxLimit(0, { amount: 0 });
      expect(result).to.be.equal(0);
    });
  });

  describe('Calculated amount (Ca) < max limit (Mxl); Should return calculated amount.', () => {
    it('Should return 200 when Ca = 200, Mxl = 500', async () => {
      const result = maxLimit(200, { amount: 500 });
      expect(result).to.be.equal(200);
    });
    it('Should return 0 when Ca = 0, Mxl = 100', async () => {
      const result = maxLimit(0, { amount: 100 });
      expect(result).to.be.equal(0);
    });
  });
});
