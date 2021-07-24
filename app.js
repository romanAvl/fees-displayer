/* eslint-disable no-console */
import calculateCommFees from './lib/services/commission-fees/calculateCommFees';

async function displayCommFees() {
  try {
    const path = process.argv[2];
    if (path && typeof path === 'string') {
      await calculateCommFees(path);
    }
  } catch (error) {
    console.error(error.message);
  }
}

// Commit this line before inserting into other projects.
displayCommFees();

export default displayCommFees;
