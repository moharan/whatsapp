$(document).ready(function() {
	//console.log("working");
	//var contador = 0;
 	// codigo (13 codigo ASCII)
 	$("body").keyup(function(x) {
 		if(x.keyCode == 13) {
       		// value input
       		var value = $("#mensaje").val();
                  // verificar si value esta vacio sino ejecuta la tarea
                  if (value == "") {
                        alert("Debes escribir una mensaje");
                  } else {
       		      $("#conversacion-chat").append("<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 comentario-chat1'>" + value + "</div>");
       		      // borrar input
       		      $("#mensaje").val("");
                  };
       	}
    });
    // personas borrar conversación
    $("#chat-persona1").click(function(){
    	// remuevo
    	$("#conversacion-chat").parent().remove();
    	// agrego
    	$("#top-chat").append('<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><img src="assets/img/logocodeacademy.png" alt="perfil1" class="rounded-circle img-lateral"></div>' + 
		'<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 texto-chat"><p class="text-left"><b>Laboratoria Perú</b><br>No se pique!!!</p></div>');

    	//$("#conversacion-chat-propias").parent().remove();
    	//$("#conversacion-chat").append("<div class='col-lg-6 col-md-6 col-sm-6 col-xs-6 comentario-chat1'>Conversaciones Guardadas chat1</div>");
    });
    $("#chat-persona2").click(function(){
    	$("#conversacion-chat").parent().remove();
    });
    $("#chat-persona3").click(function(){
    	$("#conversacion-chat").parent().remove();
    });
    $("#chat-persona4").click(function(){
    	$("#conversacion-chat").parent().remove();
    });
    $("#chat-persona5").click(function(){
    	$("#conversacion-chat").parent().remove();
    });
    $("#chat-persona6").click(function(){
    	$("#conversacion-chat").parent().remove();
    });
    $("#chat-persona7").click(function(){
    	$("#conversacion-chat").parent().remove();
    });
    $("#chat-persona8").click(function(){
    	$("#conversacion-chat").parent().remove();
    });
    $("#chat-persona9").click(function(){
    	$("#conversacion-chat").parent().remove();
    });
});
