var textzone=document.getElementById("zonetext");
var textsize=document.getElementById("Fsize");
var textPolice=document.getElementById("Fpolice");



function FBold(){

    if(textzone.style.fontWeight=="bold"){
        textzone.style.fontWeight="normal";}
    else {textzone.style.fontWeight="bold";
    }
}

function FItalic(){
    if(textzone.style.fontStyle=="italic"){
        textzone.style.fontStyle="normal";}
    else {textzone.style.fontStyle="italic";
    }
}
function Funderline(){
    if(textzone.style.textDecoration=="underline"){
        textzone.style.textDecoration=""; }
    else{ textzone.style.textDecoration="underline"; }
}
function FSize(){
textzone.style.fontSize=textsize.value;
}
function FPolice(){
textzone.style.fontFamily=textPolice.value;
}

