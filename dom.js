function gid(id) {
    return document.getElementById(id);
}

function getTextFromInput(id) {
    const inp = gid(id);
    return inp.value;
}

function addUserText() {
    let newItem = document.createElement('li');
    const text = getTextFromInput('input1');
    newItem.innerHTML = `<p>${text}</p>`;

    let list = document.querySelector('ul');
    list.appendChild(newItem);
}

const addTextButton = gid('add_text');
addTextButton.addEventListener('click', addUserText);

// change heading color
const colorizeButton = gid('colorize_heading');
colorizeButton.addEventListener('click', () => {
    const heading = document.querySelector('h1');
    heading.classList.toggle('yellow');
});
