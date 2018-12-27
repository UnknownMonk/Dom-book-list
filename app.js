const list = document.querySelector('#book-list ul');
const forms = document.forms;

list.addEventListener('click', e => {
  if (e.target.classList == 'delete') {
    const li = e.target.parentElement;

    li.parentNode.removeChild(li);
  }
});

const addForm = forms['add-book'];

addForm.addEventListener('submit', e => {
  e.preventDefault();

  const value = addForm.querySelector('input[type="text"]').value;

  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const delBtn = document.createElement('span');

  //add content

  bookName.textContent = value;
  delBtn.textContent = 'delete';

  //add attrubute

  bookName.classList.add('name');
  delBtn.classList.add('delete');

  //attach to dom

  li.appendChild(bookName);
  li.appendChild(delBtn);
  list.appendChild(li);
});

const checkBox = addForm.querySelector('#hide');

checkBox.addEventListener('change', e => {
  if (e.target.checked) {
    list.style.display = 'none';
  } else {
    list.style.display = 'block';
  }
});
