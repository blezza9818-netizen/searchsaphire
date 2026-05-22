const h1El = document.createElement('h1');
h1El.textContent = 'Домашняя библиотека';
document.body.append(h1El);

const addBtn = document.createElement('button');
addBtn.textContent = 'Добавить';
document.body.append(addBtn);

const searchBtn = document.createElement('button');
searchBtn.textContent = 'Найти';
document.body.append(searchBtn);

const ulEl = document.createElement('ul');
document.body.append(ulEl);

const bookArrList = ['Гарри Поттер', 'Над пропастью во ржи', 'Дюна'];

function renderList(arr) {
    ulEl.innerHTML = '';
    arr.forEach(element => {
        const liEl = document.createElement('li');
        liEl.textContent = element;
        ulEl.append(liEl)
    });
}

addBtn.addEventListener('click', function () {
    const newBook = prompt('Ведите название');
    if (newBook == '' || newBook == null) {
        alert('Название книги не введено!');
    } else {
        bookArrList.push(newBook);
    }
    renderList(bookArrList)
})

function searchItem(arr, search) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            result = i;
            break;
        }
    }
    return result;
}

searchBtn.addEventListener('click', function () {
    let searchBook = prompt('Введите название для поиска');
    searchIndex = searchItem(bookArrList, searchBook);
    if (searchIndex > -1) {
        document.querySelector(`li:nth-child(${searchIndex + 1})`).style.color = 'red';
    } else if (searchBook === '') {
        alert('Название книги не введено!');
        searchBook;
    } else {
        alert('Кинга не найдена!')
    }
})

renderList(bookArrList)

