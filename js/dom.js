
// Remove 3rd item bottom borders on card 
// Add list group item into an array
let itcArray = document.querySelectorAll('.list-group-item')

// Loop through items in cards, every 3rd item
for(let i = 7; i < itcArray.length; i+=3){
    console.log(itcArray[i])
    itcArray[i].style.borderBottom = "none";
}