class App {
  static title = 'My App';

  static getApplicationID() {
    return this.generateID();
  }

  static generateID() {
    return 'id-12345';
  }

  getID() {
    //return this.generateID();
  }
}

/* const app = new App();
console.log(app.title); */

console.log('Title', App.title);
console.log('Application ID', App.getApplicationID());

const app = new App();
console.log(app.getID());

class Database {
  static instance;
  connectionId;

  constructor() {
    this.connectionId = Math.random();
  }

  getConnection() {
    return 'connection string: ' + this.connectionId;
  }

  static create() {
    if (!this.instance) {
      console.log('instance', this.instance);
      this.instance = new Database();
    }
    return this.instance;
  }
}

const database = Database.create();
console.log(database.getConnection());
const database2 = Database.create();
console.log(database2.getConnection());
const database3 = Database.create();
console.log(database3.getConnection());
