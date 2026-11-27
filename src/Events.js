export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => {
        button.remove();
    });
    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    ul.addEventListener('mouseover', (e) => {
        const li = e.target.closest('li');
        if (li) {
            li.setAttribute('title', li.textContent);
        }
    });
    document.body.appendChild(ul);
}

export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';
    a.addEventListener('click', function handler(e) {
        if (!a.textContent.includes('https://tensor.ru/')) {
            e.preventDefault();
            a.textContent = a.textContent + ' ' + a.href;
            a.removeEventListener('click', handler);
        }
    });
    document.body.appendChild(a);
}

export function createList() {
    const ul = document.createElement('ul');
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    function createLi() {
        const li = document.createElement('li');
        li.textContent = 'Пункт';
        li.addEventListener('click', () => {
            li.textContent += '!';
        });
        return li;
    }

    ul.appendChild(createLi());

    button.addEventListener('click', () => {
        ul.appendChild(createLi());
    });

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
