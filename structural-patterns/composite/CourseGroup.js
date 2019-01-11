class CourseGroup {
  constructor(title, composite = []) {
    this.title = title;
    this.composite = composite;
  }

  // To keep polymorphism
  total() {
    return this.composite.reduce((sum, course) => sum + course.total(), 0);
  }

  print() {
    this.composite.forEach(course => course.print());
  }
}

module.exports = CourseGroup;
