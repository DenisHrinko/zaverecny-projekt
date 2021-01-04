let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let i, j;
let name;
window.onload = (event) =>  {
    $.getJSON("./namesday.json", function(json) {
        today = dd + '/' + mm + '/' + yyyy;
        for(i=0; i<json.meniny.zaznam.length;i++){
            if(today === json.meniny.zaznam[i].den[2] + json.meniny.zaznam[i].den[3] + '/' + json.meniny.zaznam[i].den[0] + json.meniny.zaznam[i].den[1] + "/" + "2021"){
                name = json.meniny.zaznam[i].SK;
            }
        }
        document.getElementById("actual").innerText = today + "  " + name;
    })
}

$('#search').click(function(){
    document.getElementById("output").innerHTML = "";
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");

    input = input.split(".");

    if(input.length > 1)
    {

        if(input[0].length === 1){
            input[0] = '0' + input[0][0];
        }if(input[1].length === 1){
            input[1] = '0' + input[1][0];
        }
        input = input[1] + input[0];
        $.getJSON("./namesday.json", function(json){
            for(i=0; i<json.meniny.zaznam.length;i++){
                if(input === json.meniny.zaznam[i].den){
                        output.innerHTML = json.meniny.zaznam[i].SK;
                }
            }
        })
    }else{
        $.getJSON("./namesday.json", function(json){
            for(i=0; i<json.meniny.zaznam.length;i++) {
                if (json.meniny.zaznam[i].SK != undefined && input[0].toLowerCase() == json.meniny.zaznam[i].SK.toLowerCase()) {
                    output.innerHTML = json.meniny.zaznam[i].den[2] + json.meniny.zaznam[i].den[3] + '.' + json.meniny.zaznam[i].den[0] + json.meniny.zaznam[i].den[1];
                }
            }
        })
    }
})

function normalizeString(input) {
    for(i=0;i<input[0].length;i++)
    {
        input[0][i].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        console.log(input)
    }
    return input;
}

