const inputText = document.querySelector('#inputText');
const listGroup = document.querySelector('.list-group');
const items = listGroup.querySelectorAll('li');
const body = document.querySelector('body');
inputText.addEventListener('focus', (e) => {
    body.style.background = 'green';    
    Array.from(items).map(element => {
        element.style.color = 'white';
    })
})
inputText.addEventListener('blur', (e) => {
    body.style.background = '';    
    Array.from(items).map(element => {
        element.style.color = '';
    })
})
