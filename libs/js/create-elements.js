var elements = 'main,figure,figcaption,article,aside,section,header,footer'.split(','),
	countElements, i;

for (i = 0, countElements = elements.length; i < countElements; i++) {
	document.createElement(elements[i]);
}