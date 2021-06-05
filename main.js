canvas=document.getElementById("mycan");

ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=3;
ctx.arc(100,200,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(event){
mouse_x=event.clientX-canvas.offsetLeft;
mouse_y=event.clientY-canvas.offsetTop;

color=document.getElementById("colorcode").value;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
ctx.stroke();
}

function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}