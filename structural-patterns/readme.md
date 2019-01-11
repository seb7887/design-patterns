# Structural Design Patterns
* Make ease the design
* Provide a simple way to realize relationships
* Describe how objects and classes can be combined to form structures
* Class patterns describe relationships and structures -> **Inheritance**
* Object patterns describe how objects can be associated and aggregated to form  larger and complex structures

# Decorator Pattern
* Modify an object dinamically
* Uses composition instead of inheritance
* More flexibility than static inheritance
```javascript
// Example (game)
const car = new Car('bmw');
const superCar = new carTunning(car); // decorator
```