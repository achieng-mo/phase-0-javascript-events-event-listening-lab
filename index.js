//Get DOM element 'input' and reference it to a variable (input)
//Use .addEventListener method with 2 arguments (event name-click, arrow function)
//Call the function addEventListener

function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click',() => alert('I was clicked!'));
}

addingEventListener()


