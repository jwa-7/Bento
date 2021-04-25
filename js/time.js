window.onload = displayClock();
function displayClock() {

  // Set to true to use a 12 hour date format
  var format_12hour = TIME_12H_FORMAT;

  var d = new Date();
  //* DATE
  var dateString = d.toLocaleDateString(YOUR_LOCATION_LOCALE, { month: 'long', day: "2-digit" })
  document.getElementById("monthday").innerHTML = dateString;

  //* TIME
  var min = (mins = ('0' + d.getMinutes()).slice(-2));
  var hh = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
  var ampm = '';

  if (format_12hour) {
    ampm = hh >= 12 ? ' pm' : ' am';
    hh = hh % 12;
    hh = hh ? hh : 12; //show mod 0 as 12
  }

  document.getElementById('hour').innerText = hh;
  document.getElementById('separator').innerHTML = ' : ';
  document.getElementById('minutes').innerText = min + ampm;

  setTimeout(displayClock, 1000);
}
