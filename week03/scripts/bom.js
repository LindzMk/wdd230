// elements to link to the document
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// create an array of list items 
let chaptersArray = getChapterList() || [];

//event listener for the button
button.addEventListener('click', () => {

    // check if the input value is not empty
    if (input.value != '') { //make sure input is not empty

        displayList(input.value); //call the funtion that outputs the submitted chapter
        chaptersArray.push(input.value); //add the chapter to the array
        setChapterList(); //update the localStorage with the new array
        input.value = ''; //clear the input
        input.focus(); //set the focus back to the input
    }
});

input.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        button.click();
    }
});



chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
};

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
};


function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character which is the X button
    chaptersArray = chaptersArray.filter((item) => item !== chapter); // return everyhting expect the chapter to be deleted
    setChapterList();
};

// function to display the list
function displayList(chapter) {
    // create a new list item and a delete button
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');


    li.textContent = chapter;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);


    // add an event listener for the delete button
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
        // input.value = '';
    });
    input.focus();
};