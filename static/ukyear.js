// render data / colour by value
months = [
  '/ukjanuary',
  '/ukfebruary',
  '/ukmarch',
  '/ukapril',
  '/ukmay',
  '/ukjune',
  '/ukjuly',
  '/ukaugust',
  '/ukseptember',
  '/ukoctober',
  '/uknovember',
  '/ukdecember',
]

id = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec"
]

for (let month = 0; month < id.length; month++) {
  // get birthday data
  fetch(months[month], { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById(id[month]).innerHTML = '';
      for (let i = 0; i < data.length; i++) {
        let days = document.createElement('div');
        days.className = 'dayssml';

        if (data[i][2] > 44500) {
          days.style.backgroundColor = '#D22224';
        }
        else if (data[i][2] > 43000) {
          days.style.backgroundColor = '#EE3033';
        }
        else if (data[i][2] > 40500) {
          days.style.backgroundColor = '#FF4337';
        }
        else if (data[i][2] > 39000) {
          days.style.backgroundColor = '#FD6930';
        }
        else if (data[i][2] > 37500) {
          days.style.backgroundColor = '#FF8744';
        }
        else if (data[i][2] > 36000) {
          days.style.backgroundColor = '#FFA443';
        }
        else if (data[i][2] > 34500) {
          days.style.backgroundColor = '#FFBF43';
        }
        else if (data[i][2] > 33000) {
          days.style.backgroundColor = '#FFD84A';
        }
        else if (data[i][2] > 31500) {
          days.style.backgroundColor = '#FFE58C';
        }
        else {
          days.style.backgroundColor = '#FFECAA';
        }
        document.getElementById(id[month]).appendChild(days);
      }
    });
  }
