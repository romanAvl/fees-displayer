/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import { rejects } from 'assert';
import { expect } from 'chai';
import calculateRecursive from '../../../lib/services/commission-fees/calculateRecursive';
import testData from '../../testData';

describe('/lib/services/commission-fees/calculateRecursive.js', () => {
  it('Reject if nextOperations param is not an array.', async () => {
    rejects(calculateRecursive(undefined, [], {}));
  });

  it('Reject if prevOperations param is not an array.', async () => {
    rejects(calculateRecursive([], undefined, {}));
  });

  it('Get success if operation calculated and displayed', async () => {
    const { prevOperations, nextOperations, fees } = testData;
    const result = await calculateRecursive(nextOperations, prevOperations, fees);
    expect(result).to.have.property('success').to.be.equal(true);
  });
});
