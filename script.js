let decrement = document.querySelector(".decrement");

let add = document.querySelector(".increment");

let displayNumber = document.querySelector(".displayNumber");

let reset = document.querySelector(".reset");

let value = 0;

// Increment

add.addEventListener("click",()=>{

    if(value<10){
        value+=1
displayNumber.innerHTML = value;
    }
    else{
        alert("Number above 10 are not allowed");
    }

});

// Decrement
decrement.addEventListener("click",()=>{

    if(value>0 && value<=10){
        value-=1
displayNumber.innerHTML = value;
    }
    else{
        alert("negative number are not allowed");
    }

});

// Reset

reset.addEventListener("click",()=>{

    value = 0;
    displayNumber.innerHTML = value;
   
});
