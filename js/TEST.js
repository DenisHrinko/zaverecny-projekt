let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let i;
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