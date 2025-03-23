function getData(dataid){
    setTimeout(()=>{
        console.log("data :- ",dataid);
    },2000);
}
getData(1);
getData(2);
getData(3);
// in this one 1,2,3 will be printed after 2s if we want to implement that after 2s 1 will be printed and after another 2s 2 will be printed and after 2s 3 will be printed then we can do in way :-

function getId(data_id,getNextdata){
    setTimeout(()=>{
        console.log("data :- ",data_id);
        if(getNextdata){
            getNextdata();
        }
    },2000);
}
getId(1,()=>{
    getId(2);
});