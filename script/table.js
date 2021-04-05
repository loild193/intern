window.onload = function () {
  const weekendButton = document.querySelector('#toogle--weekend');
  const divs = document.querySelectorAll(".table__weekend");

  weekendButton.addEventListener('click', function(e) {
    e.preventDefault();
    if (!weekendButton.classList.contains("active")) {
      weekendButton.classList.add("active");
      for (const div of divs){
        div.style.display = "table-cell";
      }
    }
    else {
      weekendButton.classList.remove("active");
      for (const div of divs){
        div.style.display = "none";
      }
    }
  });
}