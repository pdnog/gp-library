 var count = 0;

 $(document).ready(function () {
            $("label").css({ "color": "white", "font-size": "18px" });
        });

 function submeter() {

 			
            var aux = document.createElement("tr");
            aux.setAttribute("id", count);

            var aux1 = document.createElement("td");
            var aux2 = document.createElement("td");
            var aux3 = document.createElement("td");
            var aux4 = document.createElement("td");
            var aux5 = document.createElement("td");


            aux1.innerHTML = document.getElementById("title").value;       
            aux2.innerHTML = document.getElementById("author").value;          
            aux3.innerHTML = document.getElementById("pages").value;      
            aux4.innerHTML = document.getElementById("status").value;
            aux5.innerHTML = "<button onclick='deletar("+count+")' type='button' class='btn btn-danger'><i class='fas fa-trash'></i></button>";

            aux.appendChild(aux1);
            aux.appendChild(aux2);
            aux.appendChild(aux3);
            aux.appendChild(aux4);
            aux.appendChild(aux5);

            document.getElementById('tabela').getElementsByTagName('tbody')[0].append(aux);

            count++;
}


function deletar(count){

  $( "#"+count ).remove();
}


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});