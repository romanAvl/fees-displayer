import cashIn from './cashIn';
import cashOutJuridical from './cashOutJuridical';
import cashOutNatural from './cashOutNatural';

export default async () => {
  try {
    const cashInFees = await cashIn();
    const cashOutJuridicalFees = await cashOutJuridical();
    const cashOutNaturalFees = await cashOutNatural();

    return Promise.resolve({
      cash_in: {
        natural: cashInFees,
        juridical: cashInFees,
      },
      cash_out: {
        natural: cashOutNaturalFees,
        juridical: cashOutJuridicalFees,
      },
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
