monthnames = [
  ['January'],
]

monthmames = [0]

for (let i=0; i < monthnames.length; i++) {
  let monthname = document.createElement('div');
    monthname.className = 'monthname';
    monthname.innerHTML += '<h1>' + monthnames[i][0] + '</h1>';
    document.getElementById('calendar').appendChild(monthname);
}




function renderMonth(data) {
  document.getElementById('squares').innerHTML = '';

  for (let i = 1; i <= data.length; i++) {
    let days = document.createElement('div');
    days.innerHTML = i + '-' + data[i][2];
    days.className = 'days';

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
      days.style.backgroundColor = '#FF4337';
    }
    else {
      days.style.backgroundColor = '#F00';
    }
    document.getElementById('squares').appendChild(days);
  }
}


endpoints = [
  '/nzjanuary',
  '/nzfebruary',
  '/nzmarch'
]

endpoint = 0;

document.getElementById('nextarrow').addEventListener('click', () => {

  // load birthdays
  fetch(endpoints[endpoint], { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderMonth(data);
    });

    console.log(endpoints[endpoint])
    endpoint ++;
})


document.getElementById('backarrow').addEventListener('click', () => {

  // load birthdays - MAKE IT GO BACKWARDS!
  fetch(endpoints[endpoint], { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderMonth(data);
    });

    console.log(endpoints[endpoint])
    endpoint ++;
})
