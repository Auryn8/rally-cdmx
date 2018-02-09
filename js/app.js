var comments = [];
var $commentInput = $("#comment-Input");

function loadPage() {
  $('.modal').modal();
  $(".button-collapse").sideNav();
  $('.tap-target').tapTarget('open');
  $('.tap-target').tapTarget('close');
  $('.parallax').parallax();
  $("#form").submit(addComment);
  $commentInput.keyup(validateComment);
 
}

function validateComment () {
  var $containerAddComment = $("#add-comment");

  if($($commentInput).val().trim().length > 0) {
    $containerAddComment.removeAttr("disabled");
  } else {
    $containerAddComment.attr("disabled", true); 
  }
}

function addComment(e) {
  e.preventDefault();
  // Con estas lineas toman el valor del usuario agrega los inputs y los guarda en variables
  var comment = $commentInput.val();
  // Con las variables separadas que obtuvimos creamos una estructura de datos unica, un objeto por cada contacto
  var comment = {
    "newComment": comment,
  };

  // Agregamos el contacto a nuestra data para poder filtrar y eliminar posteriormente
  comments.push(comment);
  //console.log(comments);
  // Esta funcion pinta en el html
  paintCommentsInHtml(comment);
  
  // limpiando valores del form
  $commentInput.val(" ");
}

function paintCommentsInHtml (comment) {
  // crear elementos con DOM
  var $newComment = $("<div />", {
    "class": "card-panel hoverable"
  });
  var $containerComment = $("<p />");

  // Asignando valores
  $containerComment.text(comment.newComment);
  $newComment.append($containerComment);

   console.log($newComment);
  // agregamos lo que creamos con el Dom a un elemento existente del html


  $("#publish-comments").prepend($newComment);
  
}




  



  







  $(document).ready(loadPage);