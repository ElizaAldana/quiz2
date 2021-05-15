//DECLARACIONES
const taskDesc = document.getElementById('taskDesc');
const putTaskBtn = document.getElementById('putTaskBtn');
const todoCard = document.getElementById('todoCard');
const doingCard = document.getElementById('doingCard');
const doneCard = document.getElementById('doneCard');
//FIREBASE
const database = firebase.database();

putTask = () =>{
    let ref = database.ref('ToDo').push();

    //Para que se vea la fecha de la card
    let fecha = new Date();

    //La tarea (objeto)
    let theTask={
    id: ref.key,
    descTask: taskDesc.value,
    date: fecha.getDate()+"-"+fecha.getMonth()+"-"+fecha.getFullYear(),
    };
    ref.set(theTask);
    taskDesc.value = '';

    //database.ref('ToDo').push().set(theTask);
}

//Para que si se envie la task
putTaskBtn.addEventListener('click',putTask);

//ToDo
database.ref('ToDo').on('value', function(data){
    todoCard.innerHTML = '';
    data.forEach(
        theTask => {
        let t = theTask.val();
        let row = new Task(t);
        todoCard.appendChild(row.render1());
    });
});

//Doing
database.ref('Doing').on('value', function(data){
    doingCard.innerHTML = '';
    data.forEach(
        theTask => {
        let t = theTask.val();
        let row = new Task(t);
        doingCard.appendChild(row.render2());
    });
});

//Done
database.ref('Done').on('value', function(data){
    doneCard.innerHTML = '';
    data.forEach(
        theTask => {
        let t = theTask.val();
        let row = new Task(t);
        doneCard.appendChild(row.render3());
    });
});