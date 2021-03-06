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

# Module Pattern
* Used to keeping pieces of code independent of other components -> well-structured code
* User to guarantee **maintainability** (avoid code duplication), **namespacing** (global variables, namespace pollution), **reusability** (reuse your code in different projects)
* **Sharing global variables between unrelated code is a bad practice**
```javascript
(function() {
  // declare private variables and/or functions
})
```
* For example:
```javascript
const HTMLChanger = (function() {
  const contents = 'contents'

  var changeHTML = function() {
    const element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
  }

  return {
    callChangeHTML: function() {
      changeHTML();
      console.log(contents);
    }
  };

})();

HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined
```
## Revaling Module Pattern
* Used to maintain encapsulation and reveal certain variables and methods returned in an object literal
```javascript
const Exposer = (function() {
  let privateVariable = 10;

  const privateMethod = function() {
    console.log('Inside a private method');
    privateVariable++;
  }

  const methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }

  const otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
    first: methodToExpose,
    second: otherMethodIWantToExpose
  }
})();

Exposer.first();  // Output: This is a method I want to expose!
Exposer.second(); // Output: Inside a private method
```

# Factory Pattern
* Used to provide an interface to create objects
* It's a good practice
* Allows to separate the object from its implementation
* Allows to create different instance based on a condition
* Allows not to expose the constructors of the objects, preventing their modification
```javascript
const Factory = () => {
  this.getItem = (itemType) => {
    if (itemType === 'firstType') {
      const itemOne = require('./itemOneSubClass')();
    }
    if (itemType === 'secondType') {
      const itemTwo = require('./itemTwoSubClass')();
    }
    if (itemType === 'thidType') {
      const itemThree = require('./itemThreeSubClass')();
    }
  }
}

Factory.getItem('secondItem');
```

# Singleton Pattern
* It's a good practice
* Restricts instantiation of a class to a single object
* Keeps the same instance of that object
* Implementation based on the condition => **"only one instance"**
```javascript
const Singleton = (function() {
  let obj;
  function createInstance() {
    let obj = new Object();
    return obj;
  }
  return {
    getInstance: function() {
      if (!obj) {
        obj = createInstance();
      }
      return obj;
    }
  }
})();
```

# Builder Pattern
* Allows to simplify the construction of a complex object
* Allows to separate the construction and representation
* Allows composition
* Allows different representations for the object that is constructed
```javascript
const person1 = new Person('name', true, true, 7);
const person2 = new Person('name', false, false);
const person3 = new Person('name', true);
constructor(name, isEmployee = false, isManager = false, partTime = 0) {
  this.name = name;
  this.isEmployee = isEmployee;
  this.isManager = isManager;
  this.partTime = partTime;
}

// Using the Builder Pattern:
const person1 = new Person('name').employee().manager().partTime(7).build();
const person2 = new Person('name').build();
const person3 = new Person('name').employee().build();
```
* **We have the same class but totally different objects**