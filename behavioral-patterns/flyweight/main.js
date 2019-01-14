class Course {
  constructor(data) {
    this.flyWeight = FlyWeightFactory.get(data.user, data.completed);
    this.title = data.title;
  }
}

class FlyWeight {
  constructor(user, completed) {
    this.user = user;
    this.completed = completed;
  }
}

const FlyWeightFactory = (() => {
  const flyWeights = {};

  const get = (user, completed) => {
    if (!flyWeights[user + completed]) {
      flyWeights[user + completed] = new FlyWeight(user, completed);
    }
    return flyWeights[user + completed];
  }

  const getCount = () => {
    let count = 0;
    for (let i in flyWeights) count++;
    return count;
  }

  return {
    get: get,
    getCount: getCount
  }
})();

const users = ['maynard', 'adam', 'danny', 'justin'];
const completed = [true, false];

const CourseMethods = function () {
  const courses = {};
  let count = 0;

  const add = (data) => {
    courses[data.title] = new Course(data);
    count++;
  }

  const get = (title) => {
    return courses[title];
  }

  const getCount = () => {
    return count;
  }

  return {
    add: add,
    get: get,
    getCount: getCount
  }
}

const courses = new CourseMethods;
const initialMemory = process.memoryUsage().heapUsed;

const numCourses = 1000000;

for (let i = 0; i < numCourses; i++) {
  courses.add({
    title: `${i}.course`,
    user: users[Math.floor(Math.random() * users.length)],
    completed: completed[Math.floor(Math.random() * completed.length)]
  });
}

const finalMemory = process.memoryUsage().heapUsed;

const usedMemory = ((finalMemory - initialMemory) / numCourses).toFixed(2);

console.log(`Memory usage ${usedMemory}`);