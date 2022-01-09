setInterval(createSnow, 10);

function createSnow(){

     const snow = document.createElement("i");
     snow.classList.add("fas");
     snow.classList.add("fa-snowflake");

     snow.style.left = Math.random() * innerWidth + "px";
     snow.style.animationDuration = Math.random() * 3  + 1 +"s";
     snow.style.opacity = Math.random();
     snow.style.fontSize = Math.random() * 10;

     document.body.append(snow);

     

     setTimeout( () =>{
           snow.remove()
          },  4000);
}

