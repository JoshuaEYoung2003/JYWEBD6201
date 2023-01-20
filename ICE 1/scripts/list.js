// ADDING ITEMS TO START AND END OF LIST
let list = document.getElementsByTagName('ul')[0];   // Get the <ul> element

// ADD NEW ITEM TO END OF LIST
let newlastitem = document.createElement('li');   // Create element
let newtextlast = document.createTextNode('half and half cream');   // Create text node
newlastitem.appendChild(newtextlast);   // Add text node to element
list.appendChild(newlastitem);   // Add element end of list

// ADD NEW ITEM START OF LIST
let newfirstitem = document.createElement('li');   // Create element
let newtextfirst = document.createTextNode('lettuce');   // Create text node
newfirstitem.appendChild(newtextfirst);  // Add text node to element
list.insertBefore(newfirstitem, list.firstChild);   // Add element to list



let listitems = document.getElementsByTagName('li');   // All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
let i;// Counter variable
for (i = 0; i < listitems.length; i++){
    listitems[i].className = 'cool';
}   // Loop through elements
// Change class to cool


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let findheader = document.querySelector('h2');   // h2 element
let headertext = findheader.firstChild.nodeValue;   // h2 text
let numberofitems = listitems.length;  // No. of <li> elements
let newheader = headertext + '<span>' + numberofitems + '</span>';   // Content
findheader.innerHTML = newheader; // Update h2 using innerHTML (not textContent) because it contains markup