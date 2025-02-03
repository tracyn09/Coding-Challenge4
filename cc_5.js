//Task 1
//Declaring CUSTOMER object
let customer = {name: "John Doe", age: 35, email: "john.doe@gmail.com"};
//Logging each property
console.log(`Customer Name:, ${customer.name}`)
console.log(`Customer Age: ${customer.age}`)
console.log(`Customer Email: ${customer.email}`);

//Task 2
//Declaring ORDER object
let order = {orderId: 12345, totalAmount: 150, status: "Processing",
//Add displayOrder() method + calling to log properties
displayOrder: function() { 
    console.log(`Order ID: ${order.orderId}`)
    console.log(`Order Total: ${order.totalAmount}`)
    console.log(`Order Status: ${order.status}`)}
};
order.displayOrder()
