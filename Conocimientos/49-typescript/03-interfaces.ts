class EquipoEmpresa {
  area: string;
  modelo: string;
  marca: string;

  constructor(area: string, modelo: string, marca: string) {
    this.area = area;
    this.modelo = modelo;
    this.marca = marca;
  }
}

interface IEquipoEmpresa {
  area: string;
  modelo: string;
  marca: string;
}

interface IPersona {
  name: string;
  age: number;
  team: IEquipoEmpresa;
}

class Persona {
  name: string;
  age: number;
  team: IEquipoEmpresa;

  constructor(properties: IPersona) {
    this.name = properties.name;
    this.age = properties.age;
    this.team = new EquipoEmpresa(
      properties.team.area,
      properties.team.modelo,
      properties.team.marca
    );
  }
}

const properties: IPersona = {
  name: 'John',
  age: 30,
  team: {
    area: 'Sistemas',
    modelo: 'HP',
    marca: 'Probook',
  },
};

const persona = new Persona(properties);
console.log(persona);
