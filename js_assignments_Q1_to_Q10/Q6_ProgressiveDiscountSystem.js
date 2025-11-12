// Q6. Progressive Discount System
// Instructions followed: compute tiered discounts and print original total, discount %, final price using Math.round().

const totalPurchase = 5360; // change to test different tiers

let discountPercent = 0;
if (totalPurchase >= 10000) {
  discountPercent = 25;
} else if (totalPurchase >= 5000) {
  discountPercent = 15;
} else if (totalPurchase >= 2000) {
  discountPercent = 5;
} // else remains 0

const discountAmount = (totalPurchase * discountPercent) / 100;
const finalPrice = Math.round(totalPurchase - discountAmount);

console.log(`Original Total: ₹${Math.round(totalPurchase)}`);
console.log(`Discount: ${discountPercent}%`);
console.log(`Final Price after discount: ₹${finalPrice}`);
