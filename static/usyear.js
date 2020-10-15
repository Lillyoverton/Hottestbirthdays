// render data / colour by value
months = [
  '/usjanuary',
  '/usfebruary',
  '/usmarch',
  '/usapril',
  '/usmay',
  '/usjune',
  '/usjuly',
  '/usaugust',
  '/usseptember',
  '/usoctober',
  '/usnovember',
  '/usdecember',
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

        if (data[i][2] > 116000) {
          days.style.backgroundColor = '#D22224';
        }
        else if (data[i][2] > 112000) {
          days.style.backgroundColor = '#EE3033';
        }
        else if (data[i][2] > 108000) {
          days.style.backgroundColor = '#FF4337';
        }
        else if (data[i][2] > 104000) {
          days.style.backgroundColor = '#FD6930';
        }
        else if (data[i][2] > 100000) {
          days.style.backgroundColor = '#FF8744';
        }
        else if (data[i][2] > 96000) {
          days.style.backgroundColor = '#FFA443';
        }
        else if (data[i][2] > 92000) {
          days.style.backgroundColor = '#FFBF43';
        }
        else if (data[i][2] > 88000) {
          days.style.backgroundColor = '#FFD84A';
        }
        else if (data[i][2] > 84000) {
          days.style.backgroundColor = '#FFE58C';
        }
        else {
          days.style.backgroundColor = '#FFECAA';
        }

        document.getElementById(id[month]).appendChild(days);
      }
    });
  }
