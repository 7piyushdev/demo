// Examining the DOCUMENT OBJECT

console.dir(document.domain)
console.dir(document.URL)
console.dir(document.title)

console.dir(document.doctype)
console.dir(document.head)
console.dir(document.all) // gives an array, an html collection prent inside the DOM. Can access the elements with indexes.

console.log(document.all[10]); // gives the h1 element
console.log(document.images); // gives an empt array as we dont have any images

// document.all[10].textContent = "hello me" not the best practice

var headingTitle = document.getElementById("header-title");
console.log(headingTitle);
// // headingTitle.textContent = 'Hello TC'
// // headingTitle.innerText = 'Hi IT'
// // console.log(headerTitle.innerText)

// // innerText overwrote the tectContent text because innerText pays attention to the styling. In span it shows the text in both title and console. but With textContent the span text will disappear from screen but shows in console.

headingTitle.innerHTML = '<h3>Hello</h3>'
headingTitle.style.border = '2px solid black'



var items = document.getElementsByClassName('list-group-item')
console.log(items);
console.log(items[1]);
items[1].textContent = "hello1"
items[2].style.backgroundColor = "green"
// items.style.fontWeight = "bold"

for(var i=0; i<items.length; i++){
    items[i].style.fontWeight = "bold"
}


