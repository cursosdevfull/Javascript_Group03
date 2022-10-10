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

const sortedByStudentsEnrolled = courses
  .map((course) => {
    const obj = { title: course.title, studentsEnrolled: 0 };

    let total = 0;
    course.schedules.forEach((schedule) => {
      total = total + schedule.totalStudents;
    });

    obj.studentsEnrolled = total;

    return obj;
  })
  .sort((elementA, elementB) => {
    if (elementA.studentsEnrolled < elementB.studentsEnrolled) {
      return 1;
    } else {
      return -1;
    }
  });

console.log(sortedByStudentsEnrolled);
