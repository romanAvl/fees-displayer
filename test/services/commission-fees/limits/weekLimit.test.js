/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import { expect } from 'chai';

import weekLimit from '../../../../lib/services/commission-fees/limits/weekLimit';

describe('/lib/services/commission-fees/limits/weekLimit.js', () => {
  describe('this week summary (Ws) + Operation amount (O) > week limit amount (Wl); Operation amount (O) partly exceeded the limit. Should calculate percents. Percents = 0.5', () => {
    it('Should return 2.5 when Ws = 500, O = 1000, Wl = 1000', async () => {
      const result = weekLimit({
        week_limit: {
          amount: 1000,
        },
        percents: 0.5,
      }, {
        date: '2021-07-18', user_id: 1, type: 'cash_in', operation: { amount: 1000.00 },
      }, [
        {
          date: '2021-07-15', user_id: 1, type: 'cash_in', operation: { amount: 200.00 },
        },
        {
          date: '2021-07-13', user_id: 1, type: 'cash_in', operation: { amount: 200.00 },
        },
        {
          date: '2021-07-12', user_id: 1, type: 'cash_in', operation: { amount: 100.00 },
        },
      ]);
      expect(result).to.be.equal(2.5);
    });
    it('Should return 2.5 when Ws = 0, O = 1000, Wl = 500', async () => {
      const result = weekLimit({
        week_limit: {
          amount: 500,
        },
        percents: 0.5,
      }, {
        date: '2021-07-18', user_id: 1, type: 'cash_in', operation: { amount: 1000.00 },
      }, []);
      expect(result).to.be.equal(2.5);
    });
  });

  describe('this week summary (Ws) + Operation amount (O) > week limit amount (Wl); Operation amount (O) fully exceeded the limit. Should calculate percents. Percents = 0.5', () => {
    it('Should return 5 when Ws = 1000, O = 1000, Wl = 1000', async () => {
      const result = weekLimit({
        week_limit: {
          amount: 1000,
        },
        percents: 0.5,
      }, {
        date: '2021-07-18', user_id: 1, type: 'cash_in', operation: { amount: 1000.00 },
      }, [
        {
          date: '2021-07-15', user_id: 1, type: 'cash_in', operation: { amount: 400.00 },
        },
        {
          date: '2021-07-13', user_id: 1, type: 'cash_in', operation: { amount: 200.00 },
        },
        {
          date: '2021-07-12', user_id: 1, type: 'cash_in', operation: { amount: 400.00 },
        },
      ]);
      expect(result).to.be.equal(5);
    });
    it('Should return 5 when Ws = 1000, O = 1000, Wl = 0', async () => {
      const result = weekLimit({
        week_limit: {
          amount: 0,
        },
        percents: 0.5,
      }, {
        date: '2021-07-18', user_id: 1, type: 'cash_in', operation: { amount: 1000.00 },
      }, [
        {
          date: '2021-07-15', user_id: 1, type: 'cash_in', operation: { amount: 400.00 },
        },
        {
          date: '2021-07-13', user_id: 1, type: 'cash_in', operation: { amount: 200.00 },
        },
        {
          date: '2021-07-12', user_id: 1, type: 'cash_in', operation: { amount: 400.00 },
        },
      ]);
      expect(result).to.be.equal(5);
    });
    it('Should return 5 when Ws = 0, O = 1000, Wl = 0', async () => {
      const result = weekLimit({
        week_limit: {
          amount: 0,
        },
        percents: 0.5,
      }, {
        date: '2021-07-18', user_id: 1, type: 'cash_in', operation: { amount: 1000.00 },
      }, []);
      expect(result).to.be.equal(5);
    });
  });

  describe('this week summary (Ws) + Operation amount (O) < week limit amount (Wl); Should return 0. Percents = 0.5', () => {
    it('Should return 0 when Ws = 500, O = 200, Wl = 1000', async () => {
      const result = weekLimit({
        week_limit: {
          amount: 1000,
        },
        percents: 0.5,
      }, {
        date: '2021-07-18', user_id: 1, type: 'cash_in', operation: { amount: 200.00 },
      }, [
        {
          date: '2021-07-15', user_id: 1, type: 'cash_in', operation: { amount: 500.00 },
        },
      ]);
      expect(result).to.be.equal(0);
    });
    it('Should return 0 when Ws = 0, O = 400, Wl = 500', async () => {
      const result = weekLimit({
        week_limit: {
          amount: 500,
        },
        percents: 0.5,
      }, {
        date: '2021-07-18', user_id: 1, type: 'cash_in', operation: { amount: 400.00 },
      }, []);
      expect(result).to.be.equal(0);
    });
    it('Should return 0 when Ws = 0, O = 0, Wl = 500', async () => {
      const result = weekLimit({
        week_limit: {
          amount: 500,
        },
        percents: 0.5,
      }, {
        date: '2021-07-18', user_id: 1, type: 'cash_in', operation: { amount: 0.00 },
      }, []);
      expect(result).to.be.equal(0);
    });
  });

  describe('this week summary (Ws) + Operation amount (O) == week limit amount (Wl); Should return 0. Percents = 0.5', () => {
    it('Should return 0 when Ws = 500, O = 500, Wl = 1000', async () => {
      const result = weekLimit({
        week_limit: {
          amount: 1000,
        },
        percents: 0.5,
      }, {
        date: '2021-07-18', user_id: 1, type: 'cash_in', operation: { amount: 500.00 },
      }, [
        {
          date: '2021-07-15', user_id: 1, type: 'cash_in', operation: { amount: 500.00 },
        },
      ]);
      expect(result).to.be.equal(0);
    });
    it('Should return 0 when Ws = 0, O = 500, Wl = 500', async () => {
      const result = weekLimit({
        week_limit: {
          amount: 500,
        },
        percents: 0.5,
      }, {
        date: '2021-07-18', user_id: 1, type: 'cash_in', operation: { amount: 500.00 },
      }, []);
      expect(result).to.be.equal(0);
    });
    it('Should return 0 when Ws = 0, O = 0, Wl = 0', async () => {
      const result = weekLimit({
        week_limit: {
          amount: 0,
        },
        percents: 0.5,
      }, {
        date: '2021-07-18', user_id: 1, type: 'cash_in', operation: { amount: 0.00 },
      }, []);
      expect(result).to.be.equal(0);
    });
  });
});
