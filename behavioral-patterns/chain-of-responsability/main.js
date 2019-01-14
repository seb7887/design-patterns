const courses = require('./courses');
const Finder = require('./Finder');

const udemyFinder = new Finder('Finder Udemy', courses);

const searchQuery = 'Kotlin';
const result = udemyFinder.find(searchQuery);

console.log(result);