
const lampadaOn = document.getElementById('on');
const lampadaOff = document.getElementById('off');
const toggleButton = document.getElementById('toggle-button');
const container = document.querySelector('.container'); 


toggleButton.addEventListener('click', function() {

    const isOn = lampadaOn.style.display !== 'none';


    if (isOn) {
        lampadaOn.style.display = 'none';
        lampadaOff.style.display = 'block';
        container.style.backgroundColor = '#333'; 
    } else {
        lampadaOn.style.display = 'block';
        lampadaOff.style.display = 'none';
        container.style.backgroundColor = 'yellow'; 
    }
});