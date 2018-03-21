//9.6 Exercise - Events and event listeners

var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function(e) {

	var elementsTagLi = document.getElementsByTagName('li');
	var element = document.createElement('li');
	element.innerHTML = 'item ';
	var number =  elementsTagLi.length;
	element.innerHTML += number;
	list.appendChild(element);

  });

  /* In this exercise HTML <li> elements should start with an "Item 0" number. 
  I've changed it into "Item 1" because .length starts counting from 1 so after first click it adds a new button "item 2".
  I have no idea, how author did it so that it counts buttons from 0. */