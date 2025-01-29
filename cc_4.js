// Task 1

// Declare purchaseAmount With a Value
var purchaseAmount= 679

// Use IF Statement to Apply Discount
let finalAmount;
if (purchaseAmount > 100) {
    finalAmount=purchaseAmount * .3;}
else { finalAmount=purchaseAmount}

// Updated Final Value
console.log(`Final amount after discount: $${finalAmount}`);

// Task 2

// Declare Sales Array
let sales = [457,689,232,156,743]
let sum = 0 // To Start Adding from 0

// Use Loop to Calculate Total Sales
for(let x=0; x<sales.length; x++)
{sum += sales[x]};

// Update Total Sales
console.log(`Total Sales: ${sum}`);

// Task 3 

// Declaring Stock with Initial Value 10
var stock = 10

// While Loop to Decrease Stock to 0
while(stock>0) 
{stock--;

// Logging Decrements
console.log(`Stock Value after Decrease: ${stock}`)}