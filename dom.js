// console.log(document.type)
// console.log(document.getElementById)
// var headertitle=document.getElementById('header-title')
// // console.log()
// headertitle.style.borderBottom="solid 3px"
// var additem=document.getElementsByClassName('title')
// additem[0].style.color="green"
// additem[0].fontWeight="bold"
// console.log(additem)
// additem.style.color="#111"

// var items=document.getElementsByClassName('list-group-item')
// console.log(items)
// items[2].style.backgroundColor="green"
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold"
// }

var li=document.getElementsByTagName('li')
console.log(li)
li[2].style.backgroundColor="green"
for(var i=0;i<li.length;i++){
    li[i].style.fontWeight="bold"
    li[i].style.backgroundColor="pink"
    
}