//elements to link to the document
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//event listener for the button
button.addEventListener('click', () => {

    // check if the input value is not empty
    if (input.value != '') {

        // create a new list item and a delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // add the input value to the list item and the delete // button to the list item
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = ''; // clear the input value 

        // add an event listener for the delete button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
            input.value = '';
        });

        input.focus();
    }
});

// add an event listener for the input to allow the user to Add entrys with "Enter" key
input.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        button.click();
    }
});
