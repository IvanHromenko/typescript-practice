export type LeaseStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface LeaseApplication {
  id: string;
  customerId: string;
  assetType: string;
  assetPrice: number;
  durationMonths: number;
  status: LeaseStatus;
}