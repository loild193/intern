const weekButton = document.querySelector(".toogle--week");
const monthButton = document.querySelector(".toogle--month");

weekButton.addEventListener('click', function(e){
  e.preventDefault();

  if(weekButton.classList.contains('inactive')) {
    weekButton.classList.remove('inactive');
    weekButton.classList.add('active');

    weekButton.style.color = "#fff";
    weekButton.style.backgroundColor = "rgb(7, 101, 179)";

    monthButton.classList.remove('active');
    monthButton.classList.add('inactive');
    monthButton.style.color = "rgb(7, 101, 179)";
    monthButton.style.backgroundColor = "transparent";
  }
});

monthButton.addEventListener('click', function(e){
  e.preventDefault();

  if(monthButton.classList.contains('inactive')) {
    monthButton.classList.remove('inactive');
    monthButton.classList.add('active');

    monthButton.style.color = "#fff";
    monthButton.style.backgroundColor = "rgb(7, 101, 179)";

    weekButton.classList.remove('active');
    weekButton.classList.add('inactive');
    weekButton.style.color = "rgb(7, 101, 179)";
    weekButton.style.backgroundColor = "transparent";
  }
});
