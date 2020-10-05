// load birthdays
fetch('/nzjanuary', { method: 'GET' })
  .then(response => console.log(response))


  document.getElementById('squares').innerHTML = '';
  let days = document.createElement('div');
  days.className = 'days';
  document.getElementById('squares').appendChild(days);
