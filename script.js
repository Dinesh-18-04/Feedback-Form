function change(event){
    let count= 200;
    var sp = document.getElementById("sp");
    var store = event.target.value;
    var length1 = store.length;
    console.log(length1);
    if(length1<=200){
        count = count-length1;
        sp.textContent=count;
    }
}