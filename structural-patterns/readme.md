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

# Composite Pattern
* Group of items (work with Tree data structure)
* Tree structures of objects
* Class hierarchies with **primitive and objects**
* Any level of complexity
```javascript
// items (leaves)
const firstObj = new Item('one item');
const secondObj = new Item('second item');
const thirdObj = new Item('third item');
// sub-tree
const groupOfObjects = new TreeItems('group', [firstObj, secondObj]);
// tree
const Tree = new TreeItems('TREE', [groupOfObjects, thirdObj]);
```

# Facade Pattern
* Provides convenient higher-level interface
* Hides complex code (logic)
* **Facade = wrapper**
* Readable code
```javascript
const facadeWrapper = (() => {
  const one = (paramOne) => {
    // difficult logic
  }
  const two = (paramTwo) => {
    // difficult logic
  }
  return {
    one: one,
    two: two
  }
})();
// Get access through the wrapper
facadeWrapper.one(paramOne);
```