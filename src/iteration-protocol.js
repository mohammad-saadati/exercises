// Define a constructor function for a Car object
function Car(make, model, year) {
  // Properties of the Car object
  this.make = make;
  this.model = model;
  this.year = year;

  // Method of the Car object
  this.displayInfo = function () {
    console.log(`Car: ${this.make} ${this.model} (${this.year})`);
  };
}

// Make the Car object iterable by implementing Symbol.iterator
Car.prototype[Symbol.iterator] = function () {
  const properties = Object.keys(this);
  let index = 0;

  return {
    next: () => {
      if (index < properties.length) {
        const key = properties[index];
        index++;
        return { value: [key, this[key]], done: false };
      } else {
        return { done: true };
      }
    },
  };
};

// Create an instance of the Car object
const myCar = new Car("Toyota", "Corolla", 2020);

// Use a for...of loop to iterate over the properties of the Car object
for (const [key, value] of myCar) {
  console.log(`${key}: ${value}`);
}

// Output:
// make: Toyota
// model: Corolla
// year: 2020
// displayInfo: function() {...}
