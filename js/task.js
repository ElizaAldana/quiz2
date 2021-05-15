class Task{
    constructor(theTask){
        this.theTask = theTask
    }

    render1 = () => {
        let category = document.createElement('div');
        category.className = 'allComp';

        //Este es el de la descripción de la task
        let taskDescription = document.createElement('div');
        taskDescription.className = 'taskDescription';
        taskDescription.innerHTML = this.theTask.descTask;

        //BotonAzul (el que sirve para avanzar)
        let blueBtn = document.createElement('button');
        blueBtn.className = 'blueBtn';
        blueBtn.innerHTML = (' ');
        //BotonRojo (el que sirve para borrar)
        let redBtn = document.createElement('button');
        redBtn.className = 'redBtn';
        blueBtn.innerHTML = (' ');

        //este es pa que salga la fecha
        let fechaImp = document.createElement('div');
        fechaImp.className = 'fechaImp';
        fechaImp.innerHTML = this.theTask.date;

        //los appendChild
        category.appendChild(taskDescription);
        category.appendChild(fechaImp);
        category.appendChild(blueBtn);
        category.appendChild(redBtn);

        //Métodos de botones
        blueBtn.addEventListener('click', () =>{
            let reference = database.ref('Doing').push();

            let theTask = {
            id: reference.key,
            date: this.theTask.fechaImp,
            descTask: this.theTask.descTask,
            };

            reference.set(theTask);
            const daatabase = firebase.database();
            daatabase.ref('ToDo/'+this.theTask.id).set(null);
        });

        redBtn.addEventListener('click', () =>{
            const database = firebase.database();
            database.ref('ToDo/'+this.theTask.id).set(null);
        });

        return category;
    }

    render2 = () =>{
        let category = document.createElement('div');
        category.className = 'allComp';

        //Este es el de la descripción de la task
        let taskDescription = document.createElement('div');
        taskDescription.className = 'taskDescription';
        taskDescription.innerHTML = this.theTask.descTask;

        //BotonAzul (el que sirve para avanzar)
        let blueBtn = document.createElement('button');
        blueBtn.className = 'blueBtn';
        blueBtn.innerHTML = (' ');
        //BotonRojo (el que sirve para borrar)
        let redBtn = document.createElement('button');
        redBtn.className = 'redBtn';
        blueBtn.innerHTML = (' ');
        //BotonAmarillo (el que sirve para retroceder)
        let yellowBtn = document.createElement('button');
        yellowBtn.className = 'yellowBtn';
        blueBtn.innerHTML = (' ');


        //este es pa que salga la fecha
        let fechaImp = document.createElement('div');
        fechaImp.className = 'fechaImp';
        fechaImp.innerHTML = this.theTask.date;

        //los appendChild
        category.appendChild(taskDescription);
        category.appendChild(fechaImp);
        category.appendChild(blueBtn);
        category.appendChild(redBtn);
        category.appendChild(yellowBtn);

        //Métodos de botones
        blueBtn.addEventListener('click', () =>{
            const daatabase = firebase.database();
            let reference = daatabase.ref('Done').push();

            let theTask = {
            id: reference.key,
            date: this.theTask.fechaImp,
            descTask: this.theTask.descTask,
            };

            reference.set(theTask);
            daatabase.ref('Doing/'+this.theTask.id).set(null);
        });

        yellowBtn.addEventListener('click', ()=>{
            let reference = database.ref('ToDo').push();
            let theTask = {
                id: reference.key,
                date: this.theTask.fechaImp,
                descTask: this.theTask.descTask,
            };
            reference.set(theTask);
            const daatabase = firebase.database();
            daatabase.ref('Doing/'+this.theTask.id).set(null);
        
        });

        redBtn.addEventListener('click', () =>{
            const database = firebase.database();
            database.ref('Doing/'+this.theTask.id).set(null);
        });

        return category;
    }

    render3 = () =>{
        let category = document.createElement('div');
        category.className = 'allComp';

        //Este es el de la descripción de la task
        let taskDescription = document.createElement('div');
        taskDescription.className = 'taskDescription';
        taskDescription.innerHTML = this.theTask.descTask;

        //BotonRojo (el que sirve para borrar)
        let redBtn = document.createElement('button');
        redBtn.className = 'redBtn';
        blueBtn.innerHTML = (' ');
        //BotonAmarillo (el que sirve para retroceder)
        let yellowBtn = document.createElement('button');
        yellowBt.className = 'yellowBtn';
        blueBtn.innerHTML = (' ');


        //este es pa que salga la fecha
        let fechaImp = document.createElement('div');
        fechaImp.className = 'fechaImp';
        fechaImp.innerHTML = this.theTask.date;

        //los appendChild
        category.appendChild(taskDescription);
        category.appendChild(fechaImp);
        category.appendChild(redBtn);
        category.appendChild(yellowBtn);

        //Métodos de botones
        yellowBtn.addEventListener('click', ()=>{
            let reference = database.ref('Doing').push();
            let theTask = {
                id: reference.key,
                date: this.theTask.fechaImp,
                descTask: this.theTask.descTask,
            };
            reference.set(theTask);
            const daatabase = firebase.database();
            daatabase.ref('Done/'+this.theTask.id).set(null);
        
        });

        redBtn.addEventListener('click', () =>{
            const database = firebase.database();
            database.ref('Done/'+this.theTask.id).set(null);
        });

        return category;
    }
}
