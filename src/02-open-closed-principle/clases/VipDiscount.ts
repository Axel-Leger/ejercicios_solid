import { IDiscount } from "../interfaces/IDiscount";

export class VipDiscount implements IDiscount {
  calculate(): number {
    return 20;
  }
}