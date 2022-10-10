const notas = [10, 20, 13, 18, 15, 16, 11, 9];

const sortedNotas = notas.sort((elementA, elementB) => {
  if (elementA > elementB) {
    return -1;
  } else if (elementA === elementB) {
    return 0;
  } else {
    return 1;
  }
});

console.log(sortedNotas);

const users = ['Javier', 'Pedro', 'Alejandro'];

const namesSorted = users.sort((elementA, elementB) => {
  if (elementA > elementB) {
    return -1;
  } else {
    return 1;
  }
});

console.log(namesSorted);

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
    console.log(elementA, elementB);
    if (elementA.studentsEnrolled < elementB.studentsEnrolled) {
      return 1;
    } else {
      return -1;
    }
  }
);

console.log(sortedByStudentsEnrolled);

/* const totalStudentsByCourse = [
  { title: 'NodeJS', studentsEnrolled: 81 },
  { title: 'Microservicios', studentsEnrolled: 76 },
  { title: 'Angular', studentsEnrolled: 33 },
]; */
