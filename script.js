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

//  with for each method

let value = 0;
const display = document.querySelector(".displayNumber")
const btns = document.querySelectorAll(".btn")
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrement')){
            value--
        }else if(styles.contains('increment')){
            value++
        }else {
            value = 0
        }
        if(value>0){
            display.style.color = 'green'
        }else if(value<0){
            display.style.color = "red"
        }else{
            display.style.color = "black"
        }
        display.textContent = value
    })
})
