// TODO 20: 在这里写实现代码
import Person from './person';

class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return `${super.introduce()} I am a Teacher. I teach ${
      this.klass === undefined ? 'No Class' : `Class ${this.klass}`
    }.`;
  }
}

module.exports = Teacher;
