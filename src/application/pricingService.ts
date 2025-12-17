import { calculatePricing } from "../domain/pricing";

export class PricingService {
  calculate(assetPrice: number, duration: number) {
    const annualRate = 0.05; // 5% mock interest
    return calculatePricing(assetPrice, annualRate, duration);
  }
}