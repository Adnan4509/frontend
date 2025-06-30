let addBtn = document.getElementById('AddBtn');
let inputBox = document.getElementById('inputBox');
let container = document.getElementById('ToDoContainer');

addBtn.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    container.appendChild(paragraph);
    paragraph.innerText = inputBox.value;
    paragraph.classList.add('paragraph-styling');
    inputBox.value = '';
    paragraph.addEventListener('click',function(){
        if(paragraph.style.textDecoration == 'none'){
        paragraph.style.textDecoration = 'line-through';
        }else{
            paragraph.style.textDecoration = 'none';
        }
    })
    paragraph.addEventListener('dblclick', function(){
        container.removeChild(paragraph);
    })
})