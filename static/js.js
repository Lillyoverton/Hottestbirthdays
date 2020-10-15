// NZ data

// render data / colour by value

function renderMonth(data) {
  document.getElementById('squares').innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    let days = document.createElement('div');
    day = '<span class="day">' + data[i][1] + '</span><br />'
    amount = '<span class="amount">' + data[i][2] + '</span>'
    days.innerHTML =  day + amount;
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
      days.style.backgroundColor = '#EE3033';
    }
    else {
      days.style.backgroundColor = '#D22224';
    }
    document.getElementById('squares').appendChild(days);
  }
}

// put data in order
endpoints = [
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

endpoint = 0;

// get birthday data
fetch(endpoints[endpoint], { method: 'GET' })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderMonth(data);
  });

  console.log(endpoints[endpoint])

// go to next month using arrow
document.getElementById('nextarrow').addEventListener('click', () => {

  endpoint ++;

  if (endpoint >= endpoints.length) {
    endpoint = 0;
  }

  fetch(endpoints[endpoint], { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderMonth(data);
    });

    console.log(endpoints[endpoint])
})

// go to previous month using arrow
document.getElementById('backarrow').addEventListener('click', () => {

  -- endpoint;

  if (endpoint < 0) {
    endpoint = endpoints.length-1;
  }

  fetch(endpoints[endpoint], { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderMonth(data);
    });

    console.log(endpoints[endpoint])
})

// put month names in order
names = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

name = 0;

// render month names
monthname = document.createElement('div');

monthname.innerHTML = names[name];
monthname.className = 'monthname';
document.getElementById('calendar').appendChild(monthname);

console.log(names[name])

// go to next month name using arrow
document.getElementById('nextarrow').addEventListener('click', () => {

  name ++;

  if (name >= names.length) {
    name = 0;
  }

  monthname.innerHTML = names[name];
  monthname.className = 'monthname';
  document.getElementById('calendar').appendChild(monthname);

  console.log(names[name])

})

// go to previous month name using arrow
document.getElementById('backarrow').addEventListener('click', () => {

  -- name;

  if (name < 0) {
    name = names.length-1;
  }

  monthname.innerHTML = names[name];
  monthname.className = 'monthname';
  document.getElementById('calendar').appendChild(monthname);

  console.log(names[name])

})
