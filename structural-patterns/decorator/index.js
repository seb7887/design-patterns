const { CourseBuilder, HotNew, BestSeller } = require('./CourseBuilder');

// const course1 = new Course('Design Patterns 1', 0, true, 149, true);
// const course2 = new Course('Design Patterns 2', 0, false, 0, false);
const course1 = new CourseBuilder('Design Patterns 1', 0, 149).makePaid(100).makeCampain().build();

const HotNew1 = new HotNew(course1);
const BestSeller1 = new BestSeller(HotNew1);

console.log(course1.toString(course1));
console.log(course1.toString(HotNew1));
console.log(course1.toString(BestSeller1));
