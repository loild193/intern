const taskUls = document.querySelectorAll(".task");
const tdDivs = document.getElementsByTagName("td");

for (const taskUl of taskUls) {
  taskUl.addEventListener('dragstart', function(e){
    e.dataTransfer.setData("task", e.target.id);
    console.log(e.target.parentElement.style)
  })
}

for (const tdDiv of tdDivs) {
  tdDiv.addEventListener('drop', function(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("task");
    e.target.appendChild(document.getElementById(data));
  })
  tdDiv.addEventListener('dragover', function(e) {
    e.preventDefault();
  })
}