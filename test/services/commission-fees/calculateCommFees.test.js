/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import { rejects } from 'assert';
import { expect } from 'chai';
import calculateCommFees from '../../../lib/services/commission-fees/calculateCommFees';

describe('/lib/services/commission-fees/calculateCommFees.js', () => {
  it('Reject if JSON file not found by given path', async () => {
    rejects(calculateCommFees('wrong_path.com'));
  });

  it('Reject if JSON file is not valid', async () => {
    rejects(calculateCommFees('test/testWrongInput.json'));
  });

  it('Get success if operation calculated and displayed', async () => {
    const result = await calculateCommFees('test/testCorrectInput.json');
    expect(result).to.have.property('success').to.be.equal(true);
  });
});
