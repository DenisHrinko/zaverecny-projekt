const draggableElements = document.querySelectorAll(".mapa2");
const droppableElements = document.querySelectorAll(".mapa");
let i;
let string;

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

    }
}