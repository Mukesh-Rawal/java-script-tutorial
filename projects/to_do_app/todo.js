let todoList = [
    {
        item: 'Buy Milk',
        dueDate: '4/10/2023'
    },
    {
        item: 'Go to College',
        dueDate: '4/10/2023'
    }
];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo_input');
    let dateElement = document.querySelector('#todo_date');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo_container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
      let {item, dueDate} = todoList[i];
      newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn_delete' onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
      `;
    }
    containerElement.innerHTML = newHtml;
}