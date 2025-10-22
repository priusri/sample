const button = document.getElementById('clickButton');
const message = document.getElementById('message');

button.addEventListener('click', function() {
    message.textContent = 'You clicked the button!';
    message.style.color = '#4CAF50';
});
