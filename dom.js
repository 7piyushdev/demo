// // Examining the DOCUMENT OBJECT

// // console.dir(document.domain)
// // console.dir(document.URL)
// // console.dir(document.title)

// // console.dir(document.doctype)
// // console.dir(document.head)
// // console.dir(document.all) // gives an array, an html collection prent inside the DOM. Can access the elements with indexes.

// // console.log(document.all[10]); // gives the h1 element
// // console.log(document.images); // gives an empt array as we dont have any images

// // // document.all[10].textContent = "hello me" not the best practice

// // var headingTitle = document.getElementById("header-title");
// // console.log(headingTitle);
// // // // headingTitle.textContent = 'Hello TC'
// // // // headingTitle.innerText = 'Hi IT'
// // // // console.log(headerTitle.innerText)

// // // // innerText overwrote the tectContent text because innerText pays attention to the styling. In span it shows the text in both title and console. but With textContent the span text will disappear from screen but shows in console.

// // headingTitle.innerHTML = '<h3>Hello</h3>'
// // headingTitle.style.border = '2px solid black'

// // getElementbyClassName

// var items = document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "hello1"
// items[2].style.backgroundColor = "green"

// // items.style.fontWeight = "bold"

// for(var i=0; i<items.length; i++){
//     items[i].style.fontWeight = "bold"
// }



// // GETELEMENTBYTAGNAME

// // If i add another items using <li> tag the same properties will be applied in the 5th li tag. As we are using the getElementsByTagName method.

// var li = document.getElementsByTagName('li')
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "hello1"
// li[2].style.backgroundColor = "yellow"


// for(var i=0; i<li.length; i++){
//     li[i].style.fontWeight = "bold"
//     li[i].style.backgroundColor = "#f4f4f4"
// }



// //QuerySelector ---- It will work for 1 item

// // var qitems= document.querySelector('.list-group-item');
// // qitems.style.backgroundColor = 'red'


// // var secondItem= document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.backgroundColor='green'



// //QuerySelectorALL

// // var seconItem = document.querySelectorAll('.list-group-item:nth-child(2)')
// // console.log(seconItem)
// // seconItem[0].style.color='red'

// // var odd = document.querySelectorAll('.list-group-item:nth-child(odd)')

// // for(var i=0; i<odd.length; i++){
// //     odd[i].style.backgroundColor = 'green'
// // }

//TRANSVERSING THE DOM

//parentNode and parentElement are same and will return the same thing.

var itemList = document.querySelector('#items')
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'grey'
console.log(itemList.parentNode.parentNode);


//childNodes

console.log(itemList.childNodes) // return the NodeList array carrying the list items and the text(carries the white spaces/line breakes in the list items). Not recommended for use.
console.log(itemList.children) // only contains the list items.
console.log(itemList.children[1]) // only contains the list items.

// //firstChild

// console.log(itemList.firstChild);// return the text(white space) if present. Not remommended

// //firstElementChild
// console.log(itemList.firstElementChild) // returns the first item in list.
// itemList.firstElementChild.textContent = 'hello 1'

//lastChild

// console.log(itemList.lastChild);// return the text(white space) if present. Not remommended

//lastElementChild
// console.log(itemList.lastElementChild) // returns the last item in list.
// itemList.lastElementChild.textContent = 'hello 5'



// nextsibling

console.log(itemList.nextSibling) // return #text
// nextelementsibling

console.log(itemList.nextElementSibling) // returns null as it doesnot have next sibling. 

// previoussibling

console.log(itemList.previousSibling) // return #text
// previouselementsibling

console.log(itemList.previousElementSibling) // returns h2 element
itemList.previousElementSibling.style.backgroundColor= 'yellow'

//createelement

var newDiv = document.createElement('div')
console.log(newDiv);

//setAttribut
newDiv.setAttribute('title', 'hello div')

//setId
newDiv.id = 'hi'

//setClass
newDiv.className = 'hidiv'

//createTextNode

var newDivText = document.createTextNode('Hello(1)')

//appendText

newDiv.appendChild(newDivText)

// Currently the element is existing in js not inside the DOM.

var container = document.querySelector('header .container')
console.log(container)
var h1 = document.querySelector('header h1')
console.log(h1)

container.insertBefore(newDiv, h1)

newDiv.style.fontSize = '20px' // can be manipulated now (newDiv).

// New Element

var secDiv = document.createElement('div')
secDiv.id = 'secdiv'

secDiv.className= 'secDiv'
console.log(secDiv)

var secDivText = document.createTextNode('Hello(2)')
secDiv.appendChild(secDivText)

var hitems = document.querySelector('#items')
console.log(hitems)
var li1 = document.querySelector('.list-group-item')
console.log(li1)
hitems.insertBefore(secDiv, li1)