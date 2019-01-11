const CourseBuilder = require('./CourseBuilder');

// const course1 = new Course('Design Patterns 1', 0, true, 149, true);
// const course2 = new Course('Design Patterns 2', 0, false, 0, false);
const course1 = new CourseBuilder('Design Patterns 1', 0, 149).makePaid(100).makeCampain().build();
const course2 = new CourseBuilder('Design Patterns 2', 0, 0).build();

console.log(course1.toString());
console.log(course2.toString());