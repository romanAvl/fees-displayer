/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import { expect } from 'chai';
import summaryCommFees from '../../../lib/loaders/commission-fees/summaryCommFees';

describe('/lib/loaders/commission-fees/summaryCommFees.js', () => {
  describe('summaryCommFees() test', async () => {
    it('Not-empty data object', async () => {
      const result = await summaryCommFees();
      expect(result).to.be.an('object');
      expect(result).to.be.not.empty;
    });

    describe('"cash_in" property', () => {
      it('Not-empty object', async () => {
        const result = await summaryCommFees();
        expect(result).to.have.property('cash_in').to.be.an('object');
        expect(result).to.have.property('cash_in').to.be.not.empty;
      });
      it('Has "natural" property typeof object', async () => {
        const result = await summaryCommFees();
        expect(result).to.have.nested.property('cash_in.natural').to.be.an('object');
        expect(result).to.have.nested.property('cash_in.natural').to.be.not.empty;
      });
      it('"natural" object has "percents" property typeof number', async () => {
        const result = await summaryCommFees();
        expect(result).to.have.nested.property('cash_in.natural.percents').to.be.an('number');
      });
      it('Has "juridical" property typeof object', async () => {
        const result = await summaryCommFees();
        expect(result).to.have.nested.property('cash_in.juridical').to.be.an('object');
        expect(result).to.have.nested.property('cash_in.juridical').to.be.not.empty;
      });
      it('"juridical" object has "percents" property typeof number', async () => {
        const result = await summaryCommFees();
        expect(result).to.have.nested.property('cash_in.juridical.percents').to.be.an('number');
      });
    });

    describe('"cash_out" property', () => {
      it('Not-empty object', async () => {
        const result = await summaryCommFees();
        expect(result).to.have.property('cash_out').to.be.an('object');
        expect(result).to.have.property('cash_out').to.be.not.empty;
      });
      it('Has "natural" property typeof object', async () => {
        const result = await summaryCommFees();
        expect(result).to.have.nested.property('cash_out.natural').to.be.an('object');
        expect(result).to.have.nested.property('cash_out.natural').to.be.not.empty;
      });
      it('"natural" object has "percents" property typeof number', async () => {
        const result = await summaryCommFees();
        expect(result).to.have.nested.property('cash_out.natural.percents').to.be.an('number');
      });
      it('Has "juridical" property typeof object', async () => {
        const result = await summaryCommFees();
        expect(result).to.have.nested.property('cash_out.juridical').to.be.an('object');
        expect(result).to.have.nested.property('cash_out.juridical').to.be.not.empty;
      });
      it('"juridical" object has "percents" property typeof number', async () => {
        const result = await summaryCommFees();
        expect(result).to.have.nested.property('cash_out.juridical.percents').to.be.an('number');
      });
    });
  });
});
