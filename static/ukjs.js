// England data

// render data / colour by value
function renderMonth(data) {
  document.getElementById('squares').innerHTML = '';

  for (let i = 1; i <= data.length; i++) {
    let days = document.createElement('div');
    day = '<span class="day">' + i + '</span><br />'
    amount = '<span class="amount">' + data[i][2] + '</span><br />'
    days.innerHTML =  day + amount;
    days.className = 'days';

    if (data[i][2] > 43000) {
      days.style.backgroundColor = '#D22224';
    }
    else if (data[i][2] > 40500) {
      days.style.backgroundColor = '#EE3033';
    }
    else if (data[i][2] > 39000) {
      days.style.backgroundColor = '#FF4337';
    }
    else if (data[i][2] > 37500) {
      days.style.backgroundColor = '#FD6930';
    }
    else if (data[i][2] > 36000) {
      days.style.backgroundColor = '#FF8744';
    }
    else if (data[i][2] > 34500) {
      days.style.backgroundColor = '#FFA443';
    }
    else if (data[i][2] > 33000) {
      days.style.backgroundColor = '#FFBF43';
    }
    else if (data[i][2] > 31500) {
      days.style.backgroundColor = '#FFD84A';
    }
    else if (data[i][2] > 30000) {
      days.style.backgroundColor = '#FFE58C';
    }
    else {
      days.style.backgroundColor = '#FFECAA';
    }

    document.getElementById('squares').appendChild(days);
  }
}

// put data in order
endpoints = [
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
