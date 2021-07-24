/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import { rejects } from 'assert';
import { expect } from 'chai';
import parseJSON from '../../../lib/services/json/parseJSON';

describe('/lib/services/display_fees_service ', () => {
  it('Reject if JSON file not found by given path', async () => {
    rejects(parseJSON('wrong_path.com'));
  });

  it('Get parsed data if JSON is correct', async () => {
    const result = await parseJSON('test/testCorrectInput.json');
    expect(result).to.be.not.an('undefined');
  });
});
