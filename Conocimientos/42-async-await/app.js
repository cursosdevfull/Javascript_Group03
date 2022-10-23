const promise01 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Task 01 completed');
    }, 5000);
  });

const promise02 = (msg) => {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Task 02 completed');
    }, 8000);
  });
};

const promise03 = (msg) => {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('Task 03 completed');
      reject('Task 03 uncompleted');
    }, 3000);
  });
};

const promise04 = (msg) => {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Task 04 completed');
    }, 6000);
  });
};

const start = async () => {
  try {
    const msg01 = await promise01();
    const msg02 = await promise02(msg01);
    const msg03 = await promise03(msg02);
    const msg04 = await promise04(msg03);
    console.log('Message', msg04);
  } catch (error) {
    console.log(error);
  }
};

//start();
(async (title) => {
  console.log(title);
  try {
    const msg01 = await promise01();
    const msg02 = await promise02(msg01);
    const msg03 = await promise03(msg02);
    const msg04 = await promise04(msg03);
    console.log('Message', msg04);
  } catch (error) {
    console.log(error);
  }
})('CursosDev');
