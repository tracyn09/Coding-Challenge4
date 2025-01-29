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

// Task 4

// Declaring Responses with Initial Value 0
var responses = 0

// While Loop until Responses reaches 3
do {responses++
    console.log(`Number of Responses: ${responses}`)} // Logging each Response Count
while (responses<3);

// Task 5 

// Declaring Employee Object
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};

// Use For In Loop
for(let x in employee)

// Logging Property and Value
{console.log(`${x}: ${employee[x]}`)};

// Task 6 

// Declaring Products Array
let products = ["MacBook", "Apple Pencil", "iPad"]

// Use For Of Loop
for (let x of products)

// Logging Product names
{console.log(`Product: ${x}`)};


