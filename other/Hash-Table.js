const myMap = new Map();

// Setting values
myMap.set("apple", 100);
myMap.set("banana", 200);

// Getting values
console.log(myMap.get("apple")); // Output: 100

// Checking for a key
console.log(myMap.has("banana")); // Output: true

// Getting the size
console.log(myMap.size); // Output: 2

// Deleting a key-value pair
myMap.delete("apple");
