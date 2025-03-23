let todo=[];

let req=prompt("please enter your request :- ");

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        console.log("---------------------");
        for(task of todo){
            console.log(task);
        }
        console.log("---------------------");
    }
    else if(req=="add"){
        let task=prompt("please enter the task you want to add :- ");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let idx=prompt("Please Enter The Index Of The Task :- ");
        todo.splice(idx,1);
        console.log("Task Deleted");
    }
}