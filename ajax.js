// ajax wrapper

class AJAX {
    get(url, handler) {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onload = () => {
            if (xhr.status == 200) {
                console.log(xhr.response);
                handler(xhr.response);
            }
        };
        xhr.send();
    }

    post(url, handler) {
        const xhr = new XMLHttpRequest();
        xhr.open('post', url, true);
        xhr.onload = () => {
            if (xhr.status == 200) {
                console.log(xhr.response);
                handler(xhr.response);
            }
        };
        xhr.send();
    }
}

const ajax = new AJAX();

function loadTaskGET() {
    ajax.get('./task.txt', addParagraph);
}

function addParagraph(text) {
    let p = document.createElement('p');
    p.innerText = text;

    document.body.appendChild(p);
}

const loadButtonGET = document.getElementById('load_task_get');
loadButtonGET.addEventListener('click', loadTaskGET);
