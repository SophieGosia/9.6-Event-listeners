//9.6 Exercise - Events and event listeners

var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function(e) {

	var elementsTagLi = document.getElementsByTagName('li');
	var element = document.createElement('li');
	var number =  elementsTagLi.length;
	
	element.innerHTML = 'item ';
	element.innerHTML += number;

	list.appendChild(element);
});
