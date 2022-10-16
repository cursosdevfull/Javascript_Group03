const person = {
  name: 'Sergio',
  age: 40,
  gender: 'masculino',
  setData(p_name, p_age, p_gender) {
    this.name = p_name;
    this.age = p_age;
    this.gender = p_gender;
  },
};

console.log('person', person);

class Person {
  name;
  age;
  gender;

  setData(p_name, p_age, p_gender) {
    this.name = p_name;
    this.age = p_age;
    this.gender = p_gender;
  }
}

const objPerson = new Person();
objPerson.setData('Sergio', 40, 'masculino');

console.log('Person', objPerson);
console.log('Name', person.name);
console.log('Age', person.age);
console.log('Gender', person.gender);

class Student {
  name;
  age;
  gender;

  constructor(name, age, gender) {
    //console.log('Constructor executed');
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const objStudent = new Student('Andrea', 25, 'femenino');

console.log('student', objStudent);
console.log("student's name", objStudent.name);

class Animal {
  feed;
  kindOfAnimal = 'Animal';

  constructor(feed) {
    this.feed = feed;
  }

  setFeed(feed) {
    this.feed = feed;
  }

  /*   walk() {
    console.log("it's walking");
  } */
}

class Elephant extends Animal {
  name;
  kindOfAnimal = 'Mammal';

  constructor(feed, name) {
    super(feed);
    //this.feed = feed;
    this.name = name;
    console.log('KindOfAnimal', this.kindOfAnimal);
  }

  setFeed(feed) {
    this.feed = feed.toUpperCase();
  }

  walk() {
    console.log(`it's walking and its feed is ${this.feed}`);
  }

  set elephantName(name) {
    this.name = name;
  }

  get elephantName() {
    return this.name;
  }
}

class Dolphin extends Animal {
  constructor(feed) {
    super(feed);
    //this.feed = feed;
  }

  swim() {
    console.log(`it's swimming and its feed is ${this.feed}`);
  }
}

const objElephant = new Elephant('peanut', "Dumbo's son");
objElephant.setFeed('peanut');
objElephant.walk();

console.log('Elephant', objElephant);
//objElephant.setElephantName('Dumbo');
//objElephant.elephantName = 'Dumbo';

//console.log("Elephant's Name", objElephant.getElephantName());
console.log("Elephant's Name", objElephant.elephantName);

const objDolphin = new Dolphin('fish');
//objDolphin.setFeed('fish');
objDolphin.swim();
