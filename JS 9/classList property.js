let img = document.querySelector('img');
img.classList //""
//go to index.html file and add class to image eg class = "abc xyz"
img.classList //"abc, xyz"
/*************************************************************************/
let heading = document.querySelector('h1');
heading.classList.add("green");
heading.classList.add("align");
heading.classList.remove("align");
heading.setAttribute('class', 'align');
heading.classList.toggle('green');
heading.classList.toggle('green');
