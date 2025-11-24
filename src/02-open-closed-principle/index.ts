import { DiscountContext } from "./clases/DiscountContext";
import { RegularDiscount } from "./clases/RegularDiscount";
import { StudentDiscount } from "./clases/StudentDiscount";
import { VipDiscount } from "./clases/VipDiscount";

export function RunOCP() {
  console.log(
    "Regular",
    new DiscountContext(new RegularDiscount()).getDiscount()
  );
  console.log(
    "Estudiante",
    new DiscountContext(new StudentDiscount()).getDiscount()
  );
  console.log("Vip", new DiscountContext(new VipDiscount()).getDiscount());
  console.log("-------------")
}