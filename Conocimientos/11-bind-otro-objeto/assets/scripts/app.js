const student = {
  name: 'Javier',
  lastname: 'Casas',
  fullName: function (status, email = 'email@peru.com') {
    return this.name + ' ' + this.lastname + ': ' + status + '. Email:' + email;
  },
  currentDate: function () {
    return new Date();
  },
};

const teacher = {
  name: 'Carmen',
  lastname: 'Prieto',
};

const member = {
  name: 'Carlos',
  lastname: 'Aliaga',
  fullName: function () {
    return this.lastname + ', ' + this.name;
  },
};

const fullNameStudent = student.fullName.bind(
  member,
  'PRESENTE',
  'cursos@todo.com'
);

//console.log(fullNameStudent());

const date = student.currentDate;

console.log(date());
