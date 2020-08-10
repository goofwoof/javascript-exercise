// TODO 19: 在这里写实现代码
import Person from './person';

class Students extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return `${super.introduce()} I am a Student. I am at Class ${this.klass}.`;
  }
}

module.exports = Students;
