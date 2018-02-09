function loadPage() {
	
	
	
	
}


var filterElements = function (e) {
    var selectedIndex = e.target.selectedIndex;
    //manejamos los atributos data
    var index = e.target[selectedIndex].dataset.index;
    console.log(index);
  
    obtenerDatos(ruta, index)
  
  }
 
  var obtenerDatos = function(ruta, index){
    
    var name= ruta[index]["name"];
    var vicinity=ruta[index]["vicinity"];
    var description=ruta[index]["info"];    
    var image=ruta[index]["image"];  
    console.log(name);
    console.log(vicinity);
    console.log(description);
    

    paintCard(name, description, vicinity, image)
}

 function paintCard(name, description , vicinity, image){

  var $div = $("<div />", {
	  "id": "card",
	  
  });
  
//titulo
  var $div1 = $("<div />").addClass("row");
  var $div2 = $("<div />").addClass("col s12 left");
  var $h5 = $("<h5 />").text(name).addClass("center");
  //imagen
  var $div3 = $("<div />").addClass("row");
  var $div4 = $("<div />").addClass("col s12");
  var $image = $("<img />").attr('src', image).addClass("responsive-image");
  //info
  var $div5 = $("<div />").addClass("row");
  var $div6 = $("<div />").addClass("col s12 center");
  var $p = $("<p />").text(description);
  var $p2 = $("<p />").text(vicinity);
//appends

$div2.append($h5);
$div1.append($div2);

$div4.append($image);
$div3.append($div4);

$div6.append($p);
$div6.append($p2);

$div5.append($div6);


$("#card").prepend($div5);
$("#card").prepend($div1);
$("#card").prepend($div3);


 }

 $(document).ready(loadPage);