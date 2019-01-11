class Course {
  constructor(data) {
    this.name = data.name;
    this.project = data.project;
    this.completed = data.completed || false;
  }
}

// IIFE function -> Inmediatly Invoked Function
const CourseServices = (
  () => {
    return {
      complete: (Course) => {
        Course.completed = true;
        console.log(`Completed ${Course.name}`);
      },
      save: (Course) => {
        console.log(`Saving course ${Course.name}`);
      }
    }
  }
)();

// Facade Pattern
const CourseServicesFacade = (
  () => {
    const Complet = (myCourse) => {
      CourseServices.complete(myCourse);
      if (myCourse.completed) {
        CourseServices.save(myCourse);
      }
    }

    return {
      complete: Complet
    }
  }
)();

module.exports = { Course, CourseServicesFacade };