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

const totalStudentsByCourse = courses.map((course) => {
  const obj = { title: course.title, studentsEnrolled: 0 };

  let total = 0;
  course.schedules.forEach((schedule) => {
    total = total + schedule.totalStudents;
  });

  obj.studentsEnrolled = total;

  return obj;
});

const sortedByStudentsEnrolled = totalStudentsByCourse.sort(
  (elementA, elementB) => {
    if (elementA.studentsEnrolled < elementB.studentsEnrolled) {
      return 1;
    } else {
      return -1;
    }
  }
);

console.log(sortedByStudentsEnrolled);
