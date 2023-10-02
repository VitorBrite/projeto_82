canvas = document.getElementById("Mycanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "";
var raio = 0;
var cor = "black";
var lineWidth = 1;
canvas.addEventListener("mousedown", myMouseDown);

 canvas.addEventListener("mouseup", myMouseUp);

 canvas.addEventListener("mouseleave", myMouseLeave);

 canvas.addEventListener("mousemove", myMouseMove);
 function myMouseDown(){
    cor=document.getElementById("colorinput").value;
    lineWidth=document.getElementById("linewidthinput").value;
    raio=document.getElementById("raioinput").value;
    mouseEvent="mousedown";
 }
 function myMouseUp(e) {
    mouseEvent = "mouseup"; 
   }
  function myMouseLeave(e) {
    mouseEvent = "mouseleave"; 
   }
   function myMouseMove(e) {
       if (mouseEvent === "mousedown") {
          var x = e.clientX - canvas.getBoundingClientRect().left;
           var y = e.clientY - canvas.getBoundingClientRect().top;
            ctx.beginPath();
             ctx.strokeStyle = cor;
              ctx.lineWidth = lineWidth ;
               ctx.arc(x, y, raio, 0, 2 * Math.PI);
                ctx.stroke(); 
               } 
}
