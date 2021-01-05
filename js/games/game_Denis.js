const draggableElements = document.querySelectorAll(".mapa2");
const droppableElements = document.querySelectorAll(".mapa");
let i;
let string;
let counter = 0;

let cas = 0

$(document).ready(function() {
    time();
});

function time(){
    setTimeout(function(){
        document.getElementById('time_game').innerHTML = 'Čas: ' + cas + ' sec';
        cas = cas + 1;
        time();
    }, 1000);
}

draggableElements.forEach(elem =>{
    elem.addEventListener("dragstart", dragStart);
});

droppableElements.forEach(elem =>{
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("drop", drop);
});

function dragStart(event){
    event.dataTransfer.setData("text", event.target.id);
}

function dragOver(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    const draggableElementData = event.dataTransfer.getData("text");
    const droppableElementData = event.target.getAttribute("data-draggable-id");

    if(draggableElementData === droppableElementData){

        string = [];

        for(i=0;i<draggableElementData.length-1;i++)
        {
            string += draggableElementData[i];
        }

        document.getElementById(string).style.opacity = '1';
        document.getElementById(draggableElementData).style.opacity = '0';
        document.getElementById(draggableElementData).style.display = 'none';
        counter = counter + 1;
        if(counter === 9){
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('win').innerHTML = 'Tvoj čas: ' + cas + 'sec';
            document.getElementById('win').style.display = 'block';
        }

    }
}

$("#but").click(function (){
    draggableElements.forEach(elem =>{
        elem.style.opacity = '1';
        elem.style.display = 'inline-block';
    });

    droppableElements.forEach(elem =>{
        elem.style.opacity = '.4';
        elem.style.display = 'block';
    });
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('win').style.display = 'none';
    cas = 0;

})