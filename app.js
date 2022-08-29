const addtask = document.getElementById('submit');
const inputtask = document.getElementById('input');
const taskcontainer = document.getElementById('taskcontainer');


//  Create addtask event listener

addtask.addEventListener('click',function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputtask.value}`;
    task.appendChild(li);

    let checkbtn = document.createElement('button');
    checkbtn.innerHTML = `<i class='bx bxs-check-square'></i>`;
    checkbtn.classList.add('checktask');
    task.appendChild(checkbtn);

    let deletebtn = document.createElement('button');
    deletebtn.innerHTML = `<i class='bx bx-trash'></i>`;
    deletebtn.classList.add('deletetask');
    task.appendChild(deletebtn);

    if (inputtask.value === ""){
        alert('Please Enter a task');
    }
    else{
        taskcontainer.appendChild(task);
        inputtask.value = "";
    }

    checkbtn.addEventListener('click',function(){
        checkbtn.parentNode.style.textDecoration = 'line-through'
    });

    deletebtn.addEventListener('click',function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
    })
})
