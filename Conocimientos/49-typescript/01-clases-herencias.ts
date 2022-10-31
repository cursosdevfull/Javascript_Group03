class Equipo {
  area: string;
  modelo: string;
  marca: string;

  constructor(area: string, modelo: string, marca: string) {
    this.area = area;
    this.modelo = modelo;
    this.marca = marca;
  }
}

class Impresora extends Equipo {
  cantidadPaginasPorMinuto: number;

  constructor(
    area: string,
    modelo: string,
    marca: string,
    cantidadPaginasPorMinuto: number
  ) {
    super(area, modelo, marca);
    this.cantidadPaginasPorMinuto = cantidadPaginasPorMinuto;
  }
}

const equipo = new Equipo('Sistemas', 'HP', 'Probook');
console.log(equipo);

const impresora = new Impresora('Sistemas', 'HP', 'Probook', 100);
console.log(impresora);
