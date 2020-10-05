function renderMonth(data) {
  document.getElementById('squares').innerHTML = '';

  for (let i = 1; i <= data.length; i++) {
    let days = document.createElement('div');
    days.innerHTML = i + '-' + data[i][2];
    days.className = 'days';

    if (data[i][2] < 12000) {
      days.style.backgroundColor = '#00F';
    }
    else if (data[i][2] < 13000) {
      days.style.backgroundColor = '#0F0';
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
