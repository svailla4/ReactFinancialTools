/* @flow */
import type {State} from '../reducers/mortgage'

const calculateMortgageAmortizations = ({amount, frequency, term, rate, amortization}:State):Array<number>=>{
    const extractedTerm:number = Number(term.charAt(0));
    const extractedFrequency:number = Number(frequency.replace('/[^0-9]+/g', '')) // remove non number characters
    const r:number = rate/ 100 / extractedFrequency;
    const n:number = extractedFrequency * amortization;
    const pv:number = amount;
    const payment:number = computePaymentAmount(pv, r, n);

    return computeAmortizationSchedule(pv, r, payment, n, amortization)
}

const computePaymentAmount = (pv:number, r:number, n:number):number=>{
  const numerator:number = Math.pow(r*(1+r),n);
  const denominator:number = Math.pow((1+r),n)-1;
  return pv *(numerator/denominator);
}

const computeAmortizationSchedule = (pv:number, r:number, payment:number, n:number, amortization:number):Array<number>=>{
  const amotizationArray:Array<number> = [];
  amotizationArray.push(pv); // year 0 starts at 100%

  for (var i = 1; i < amortization; i++) {
    amotizationArray.push(computeFutureValue(pv, r, payment, n));
  }

  return amotizationArray;
}

const computeFutureValue = (pv:number, r:number, payment:number, n:number):number=>{
    const numerator:number = Math.pow(1+r, n) -1;
    const denominator:number = r;
    const minuend:number = payment * (numerator/denominator);
    const subtrahend: number = pv * Math.pow(1+r,n);
    return subtrahend - minuend;
}
