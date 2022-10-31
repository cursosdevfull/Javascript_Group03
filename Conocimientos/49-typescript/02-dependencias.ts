class Team {
  area: string;
  modelo: string;
  marca: string;

  constructor(area: string, modelo: string, marca: string) {
    this.area = area;
    this.modelo = modelo;
    this.marca = marca;
  }
}

class Person {
  name: string;
  age: number;
  team: Team;

  constructor(
    name: string,
    age: number,
    area: string,
    modelo: string,
    marca: string
  ) {
    this.name = name;
    this.age = age;
    this.team = new Team(area, modelo, marca);
  }
}

const person = new Person('John', 30, 'Sistemas', 'HP', 'Probook');
console.log(person);
