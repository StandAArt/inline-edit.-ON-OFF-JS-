function turnEditOn(){
  editor = document.getElementById('editor');
  for(i = 0; i < editor.children.length; i++){
    editor.children[i].setAttribute("contenteditable","true");
}
};

function turnEditOff(){
  editor1 = document.getElementById('editor');
  for(i1 = 0; i1 < editor.children.length; i1++){
    editor.children[i1].setAttribute("contenteditable","false");
  }
};

var count = 0;

function turn(){
   var a = document.getElementById("btn-edit");
   count += 1;
   if(count % 2 == 0){
     turnEditOff();
     a.className = "button";
   }
   else {
     turnEditOn();
      a.className = "button1";
   }
}
