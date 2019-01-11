# Creational Design Patterns
* For object or classes creation
* In large applications, object creation needs to be controlled

# Constructor Pattern
* **Do not use ES6 arrow functions with "constructor"**
* A simple version:
```javascript
const ObjectName = function(paramOne, paramTwo) {
  this.paramOne = paramOne;
  this.paramTwo = paramTwo;

  this.toString = function() {
    return this.paramOne + ' ' + this.paramTwo;
  }
}
```
* Is not very optimal, so:
```javascript
class ObjectName {
  constructor(paramOne, paramTwo) {
    this.paramOne = paramOne;
    this.paramTwo = paramTwo;
  }

  toString() {
    return this.paramOne + ' ' + this.paramTwo;
  }
}

// best practice -> use const for objects
const newObject = new ObjectName('foo', 'bar'); 
newObject.toString();
```

# Prototype Pattern
* To clone an object, a constructor must exist to instantiate the first object. Next, by using the keyword **prototype** variables and methods bind to the object's structure
```javascript
const ObjectName = function(paramOne, paramTwo) {
  this.paramOne = paramOne;
  this.paramTwo = paramTwo;
}

// Prototype
ObjectName.prototype.toString = function() {
  return this.paramOne + ' ' + this.paramTwo;
}
```
* With ES6 you can use classes directly