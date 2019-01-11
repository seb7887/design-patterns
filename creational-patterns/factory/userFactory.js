const Instructor = require('./Instructor');
const Student = require('./Student');

const userFactory = (type, name, position, earning = 0, level = 'Beginner') => {
  switch (type) {
    case 'instructor': return new Instructor(name, position, earning);
    case 'student': return new Student(name, level);
    default: return;
  }
}

module.exports = userFactory;