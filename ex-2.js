// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = 4001;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion = ((lastMonthPaidMoreThan4000 >= 4000)&&(isWeekday==true)&&(hasBoughtProductFromITCategory==false)&&(hasAttendedDiscountEvent==false))||(isPlatinum==true);

console.log(hasPromotion);
