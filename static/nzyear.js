// render data / colour by value
months = [
  '/nzjanuary',
  '/nzfebruary',
  '/nzmarch',
  '/nzapril',
  '/nzmay',
  '/nzjune',
  '/nzjuly',
  '/nzaugust',
  '/nzseptember',
  '/nzoctober',
  '/nznovember',
  '/nzdecember',
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

        if (data[i][2] < 10500) {
          days.style.backgroundColor = '#FFECAA';
        }
        else if (data[i][2] < 11000) {
          days.style.backgroundColor = '#FFE58C';
        }
        else if (data[i][2] < 11500) {
          days.style.backgroundColor = '#FFD84A';
        }
        else if (data[i][2] < 12000) {
          days.style.backgroundColor = '#FFBF43';
        }
        else if (data[i][2] < 12500) {
          days.style.backgroundColor = '#FFA443';
        }
        else if (data[i][2] < 13000) {
          days.style.backgroundColor = '#FF8744';
        }
        else if (data[i][2] < 13500) {
          days.style.backgroundColor = '#FD6930';
        }
        else if (data[i][2] < 14000) {
          days.style.backgroundColor = '#FF4337';
        }
        else if (data[i][2] < 14500) {
          days.style.backgroundColor = '#EE3033';
        }
        else {
          days.style.backgroundColor = '#D22224';
        }
        document.getElementById(id[month]).appendChild(days);
      }
    });
  }
