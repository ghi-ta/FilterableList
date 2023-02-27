const filterInput = document.getElementById('filterInput');
const ul = document.getElementById('names');

//Add event Listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    //Get value in the input
  const filterValue = filterInput.value.toUpperCase();
  

  //Get names ul
  const li = ul.querySelectorAll('li.list-group-item');
  console.log(li);

  //loop through list-group-item lis

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];

    //if matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
       li[i].style.display = '';
    } else {
        li[i].style.display = 'none';
    }

  }

}
