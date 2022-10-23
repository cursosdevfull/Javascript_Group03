/* let counter = 0;

for (let ind = 0; ind < 100000000000; ind++) {
  counter++;
}

console.log('counter', counter);
 */

const execute = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Task executed');
      //resolve(['Daniel', 'Erika', 'Milagros']);
      reject({ statusCode: 401, message: "User isn't authenticated" });
    }, duration);
  });

  /*   promise.then(
    (data) => {
      console.log('Promise resolved (inside function)', data);
    },
    (error) => {
      console.log('Promise rejected (inside function)', error);
    }
  ); */

  return promise;

  /* promise.then(
    (data) => {
      console.log('Promise resolved', data);
    },
    (error) => {
      console.log('Promise rejected', error);
    }
  ); */
};

const promiseReturned = execute(10000);

promiseReturned.then((data) => {
  console.log('Promise resolved', data);
});

promiseReturned.catch((error) => {
  console.log('Promise rejected', error);
});

/* execute(10000)
  .then((data) => {
    console.log('Promise resolved', data);
  })
  .catch((error) => {
    console.log('Promise rejected', error);
  }); */

/* execute(10000).then(
  (data) => {
    console.log('Promise resolved', data);
  },
  (error) => {
    console.log('Promise rejected', error);
  }
); */

const btnTrackMe = document.querySelector('button');
const output = document.querySelector('p');
const mapGoogle = document.querySelector('#map_canvas');

const getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        /*         const latitude = success.latitude
        const longitude = sucess.longitude */

        const { latitude, longitude } = success.coords;
        resolve({ latitude, longitude });

        //console.log(success);
      },
      (error) => {
        console.log(error);
        reject();
      }
    );
  });

const showMap = (coords) => {
  const latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
  const map = new google.maps.Map(mapGoogle, {
    center: latlng,
    zoom: 13,
    mapTypeId: 'hybrid', //google.maps.MapTypeId.ROADMAP,
  });

  const marker = new google.maps.Marker({ position: latlng, map });
};

const logError = (error) => console.log(error);

const trackUserHandler = () => {
  console.log('starting geolocation');

  //getPosition().then(showMap).catch(logError)
  //getPosition().then(showMap).catch(error => console.log(error))
  getPosition().then(showMap).catch(console.log);
};

btnTrackMe.addEventListener('click', trackUserHandler);

const promise01 = new Promise((resolve, reject) => {
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
      resolve('Task 03 completed');
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

promise01
  .then((msg) => {
    return promise02(msg);
  })
  .then((msg) => {
    return promise03(msg);
  })
  .then((msg) => {
    return promise04(msg);
  })
  .then((msg) => console.log(msg))
  .catch((error) => console.log(error));

const promiseReportPeopleVacation = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Carlos', 'Josefina', 'Mabel']);
  }, 8000);
});

const promiseReportCapacityTeams = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      { team: 'Team01', capacity: 80 },
      { team: 'Team02', capacity: 45 },
    ]);
  }, 4000);
});

/* Promise.all([promiseReportPeopleVacation, promiseReportCapacityTeams]).then(
  (results) => console.log(results)
); */
Promise.race([promiseReportPeopleVacation, promiseReportCapacityTeams])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
