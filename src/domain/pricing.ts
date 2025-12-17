export interface PricingResult {
  monthlyPayment: number;
  totalCost: number;
  interestRate: number;
}

export function calculatePricing(
  principal: number,
  annualRate: number,
  months: number
): PricingResult {
  const monthlyRate = annualRate / 12;
  const monthlyPayment =
    (principal * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -months));

  const totalCost = monthlyPayment * months;

  return {
    monthlyPayment: Number(monthlyPayment.toFixed(2)),
    totalCost: Number(totalCost.toFixed(2)),
    interestRate: annualRate,
  };
}