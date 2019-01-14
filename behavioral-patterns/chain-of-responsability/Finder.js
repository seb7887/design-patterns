const Category = require('./Category');

class Finder {
  constructor(name, courses = []) {
    this.name = name;
    this.courses = courses;

    const ssr = new Category('ssr', courses.ssr);
    const language = new Category('language', courses.language);
    const music = new Category('music', courses.music);

    ssr.setNext(language);
    language.setNext(music);

    this.category = ssr;
  }

  find(itemName) {
    return this.category.search(itemName);
  }
}

module.exports = Finder;