const addTaskButton = document.querySelector("#add__task");
const addCategoryButton = document.querySelector("#add__category");
const listCategoryUl = document.querySelector(".category__list");
const deleteButtons = document.querySelectorAll(".fa-times");
const checkButtons = document.querySelectorAll(".fa-check-circle");

const showTask = function(e) {
  e.preventDefault();

  const modalEle = document.querySelector('.calendar__modal');

  if (modalEle.classList.contains('calendar__modal--inactive')) {
    modalEle.classList.remove('calendar__modal--inactive');
    modalEle.classList.add('calendar__modal--active');
  }
  else {
    modalEle.classList.remove('calendar__modal--active');
    modalEle.classList.add('calendar__modal--inactive');
  }
}

const showCategory = function(e) {
  e.preventDefault();
  
  if (listCategoryUl.classList.contains('inactive')) {
    listCategoryUl.classList.remove('inactive');
    listCategoryUl.classList.add('active');

    listCategoryUl.style.display = 'block';
  }
  else {
    listCategoryUl.classList.remove('active');
    listCategoryUl.classList.add('inactive');

    listCategoryUl.style.display = 'none';
  }
}

const addCategory = function(e) {
  console.log(e.target.innerHTML);
  const categoryPEle = document.querySelector('.category');
  categoryPEle.innerHTML = e.target.innerHTML;
}

const deleteTask = function(e, deleteButton) {
  const tdEle = deleteButton.parentElement.parentElement;
  const workUlEle = deleteButton.parentElement;
  
  tdEle.removeChild(workUlEle);
  tdEle.style.backgroundColor = "transparent";
  tdEle.style.borderLeft = "none";
}

const tickTask = function(e, tickButton) {
  // const 
  if (tickButton.classList.contains("icon--inactive")) {
    tickButton.classList.remove("icon--inactive");
    tickButton.classList.add("icon--active");
    tickButton.style.color = "#000";
  }
  else {
    tickButton.classList.remove("icon--active");
    tickButton.classList.add("icon--inactive");
    tickButton.style.color = "#fff";
  }
  
}

addTaskButton.addEventListener('click', (e) => showTask(e));
addCategoryButton.addEventListener('click', (e) => showCategory(e));
for (const li of listCategoryUl.children) {
  li.addEventListener('click', (e) => addCategory(e));
}
for (const deleteButton of deleteButtons) {
  deleteButton.addEventListener('click', (e) => deleteTask(e, deleteButton));
}
for (const checkButton of checkButtons) {
  checkButton.addEventListener('click', (e) => tickTask(e, checkButton));
}
