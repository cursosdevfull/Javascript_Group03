const pricesWithoutTaxes = [20, 13.3, 50, 200, 89];
const taxInPercent = 0.2;

const pricesWithTaxes = pricesWithoutTaxes.map((price, index) => {
  const priceWithTax = {
    position: index,
    taxAdjPrice: price + (1 + taxInPercent),
  };

  return priceWithTax;
});

console.log(pricesWithTaxes);

const professors = [
  { name: 'John', lastname: 'Cougar', title: 'Ph.' },
  { name: 'Steve', lastname: 'Biden', title: 'Dr.' },
  { name: 'Austin', lastname: 'Power', title: 'Ph.' },
];

const fullNameProfessors = professors.map((professor) => {
  return `${professor.title} ${professor.name} ${professor.lastname}`;
});

console.log(fullNameProfessors);

const courses = [
  {
    title: 'Angular',
    schedules: [
      { id: 1, totalStudents: 20 },
      { id: 2, totalStudents: 13 },
    ],
  },
  {
    title: 'NodeJS',
    schedules: [
      { id: 1, totalStudents: 25 },
      { id: 2, totalStudents: 22 },
      { id: 3, totalStudents: 34 },
    ],
  },
  {
    title: 'Microservicios',
    schedules: [
      { id: 1, totalStudents: 26 },
      { id: 2, totalStudents: 32 },
      { id: 3, totalStudents: 18 },
    ],
  },
];

/* const totalStudentsByCourse = [
  { title: 'Angular', studentsEnrolled: 33 },
  { title: 'NodeJS', studentsEnrolled: 81 },
  { title: 'Microservicios', studentsEnrolled: 76 },
]; */
