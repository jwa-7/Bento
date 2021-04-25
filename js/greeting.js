// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = YOUR_NAME;

// Here you can change your greetings
const greeting1 = 'Go to Sleep!';
const greeting2 = 'Good morning!';
const greeting3 = 'Good afternoon';
const greeting4 = 'Good evening,';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = buildGreeting(greeting1, name);
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = buildGreeting(greeting2, name);
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = buildGreeting(greeting3, name);
} else {
  document.getElementById('greetings').innerText = buildGreeting(greeting4, name);
}

function buildGreeting(greeting, name){
 return greeting + String.fromCharCode(160) + String.fromCharCode(160) + name + ".";
}