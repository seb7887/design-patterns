# Behavioral Design Patterns
* Focus on interactions between cooperating objects
* Maintains as loose coupling (degree of interdependece between modules) as possible
* Increase flexibility in carrying the communication process

# Flyweight Pattern
* Conserves memory by sharing "expensive" (that requires much space) objects
* Flyweight objects are **inmutable** (unchangeable) - changes will affect other objects
* Benefit: reduce # of objects, decrease memory consumption, increase performance
* Structure
```javascript
class Course {
  constructor(data) {
    this.flyweight = FlyweightFactory.get(data.user, data.completed);
    this.title = data.title;
  }
}

class Flyweight {
  constructor(user, completed) {
    this.user = user;
    this.completed = completed;
  }
}

const FlyweightFactory = (() => {
  // logic
})();
```