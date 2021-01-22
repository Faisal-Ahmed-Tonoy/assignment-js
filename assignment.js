 // https://github.com/Faisal-Ahmed-Tonoy/assignment-js

 //Program to convert kilometer to meter start.

 //fuction start
 function kilometerToMeter(kilometer) {

     //we know 1 kilometer equal to 1000 meter.
     var meter = kilometer * 1000;

     //veriable for invalid input/unexpected value 
     var error = "Distance cannot be negative.";


     if (kilometer >= 0) {
         return meter;

     } else if (kilometer <= -1) {
         return error;
     }

 }
 //fuction end

 var meterValue = kilometerToMeter(1);
 console.log(meterValue);

 //Program to convert kilometer to meter end.







 //Program for a budget calculator start

 //fuction start
 function budgetCalculator(watch, phone, laptop) {

     //variables to incorporate product price. 
     var watchPrice = 50;
     var phonePrice = 100;
     var laptopPrice = 500;
     var total = watchPrice + phonePrice + laptopPrice;

     //veriable for invalid input/unexpected value 
     var error = "Quantity cannot be negative.";

     if (watch >= 0 && phone >= 0 && laptop >= 0) {
         return total;
     } else if (watch <= -1 || phone <= -1 || laptop <= -1) {
         return error;
     }
 }
 //fuction end


 var productQuantity = budgetCalculator(1, 1, 1);
 console.log(productQuantity);
 //Program for a budget calculator end







 //Program for calculate  hotel cost  start

 //fuction start
 function hotelCost(day) {

     var cost = 0;
     var error = "Day and currency cannot be negative";


     if (day <= -1) {
         return error;
     } else if (day <= 10) {
         cost = day * 100;
     } else if (day <= 20) {
         var firstRentCost = 10 * 100;
         var remaining = day - 10;
         var secondRentCost = remaining * 80;
         cost = firstRentCost + secondRentCost;
     } else {
         var firstRentCost = 10 * 100;
         var secondRentCost = 10 * 80;
         var remaining = day - 20;
         var thirdRentCost = remaining * 50;
         var secondRentCost = 10 * 80;
         cost = firstRentCost + secondRentCost + thirdRentCost;
     }
     return cost;

 }
 //fuction end


 var perDayCost = hotelCost(1);
 console.log(perDayCost);

 //Program for calculate  hotel cost  end






 //Program to calculate largest name in an array start

 //function start
 function megaFriend(value) {

     //frist element index of parameter
     var maxAlphabet = value[0];


     //for loop start
     for (i = 0; i < value.length; i++) {
         if (value[i].length > maxAlphabet.length) {
             maxAlphabet = value[i];
         }
     }
     return maxAlphabet;
 }
 //function end

 var friendsName = ["Rafiqul", "Salam", "Kalam", "Anish"];

 console.log(megaFriend(friendsName));

 //Program to calculate largest name in an array end