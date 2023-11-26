//Function to sum all prices in the checkout
//Products is a array objects, and it has a property called "price" where is the prices product's
//And function return the sum of all the prices is in the array it get to params 
//The array is the checkout

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price)
    return sum
}