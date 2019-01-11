const Course = require('./Course');
const CourseGroup = require('./CourseGroup');

const jsCourse = new Course('Javascript', 100);
const nextjsCourse = new Course('Next.js', 50);
const gatsbyCourse = new Course('Gatsby.js', 47);

const newCourses = new CourseGroup('New Courses', [nextjsCourse, gatsbyCourse]);
const allCourses = new CourseGroup('All Courses', [jsCourse, newCourses]);

newCourses.print();
console.log(`$${newCourses.total()}`);

allCourses.print();
console.log(`$${allCourses.total()}`);
