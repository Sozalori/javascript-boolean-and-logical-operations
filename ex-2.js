// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = 4001;
let isWeekday = "friday";
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion = ((lastMonthPaidMoreThan4000 => 4000) && (isWeekday => "monday" && isWeekday <= "friday") && (hasBoughtProductFromITCategory == false)
&& (hasAttendedDiscountEvent == false)) || (isPlatinum == true);

console.log(hasPromotion);
