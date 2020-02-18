
var btngenerator=document.getElementById("btngen");
btngenerator.addEventListener("click",gen);
var c=0;
// function for creating boxes
function gen(){
    var txt=document.getElementById("textbox").value;
    var colour=document.getElementById("colorbox").value;
    for(let i=1;i<=txt;i++){
        c++;
        var generator=document.createElement("BUTTON");
        generator.innerHTML=c;
        generator.id="newsection";
        document.body.appendChild(generator).style.backgroundColor=colour;
    }
    var breakelement=document.createElement("BR");
    document.body.appendChild(breakelement);
    console.log(txt);

}