const filterByCategoryBedroom = (item) => item.category === 'bedroom';

function sumPrices(accum, item) {
  return accum + item.price;
}

const shoppingCart = [
  { product: 'pillow', price: 10, category: 'bedroom' },
  { product: 'carpet', price: 50.8, category: 'living room' },
  { product: 'swimming pool', price: 900, category: 'outdoor' },
  { product: 'night table', price: 100, category: 'bedroom' },
];

const totalCategoryBedroom = shoppingCart
  .filter(filterByCategoryBedroom)
  .reduce(sumPrices, 0);

console.log(totalCategoryBedroom);

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

const getTotalStudentsByCourse = (course) => {
  const obj = { title: course.title, studentsEnrolled: 0 };

  const total = course.schedules.reduce(
    (schedule) => total + schedule.totalStudents,
    0
  );

  obj.studentsEnrolled = total;

  return obj;
};

const sortByQuantityStudentsEnrolled = (elementA, elementB) =>
  elementA.studentsEnrolled < elementB.studentsEnrolled ? 1 : -1;

const sortedByStudentsEnrolled = courses
  .map(getTotalStudentsByCourse)
  .sort(sortByQuantityStudentsEnrolled);

console.log(sortedByStudentsEnrolled);
