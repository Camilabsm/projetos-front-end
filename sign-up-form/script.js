// Roteiro do código:
    //Requisitos:
        //First name não pode estar vazio
        //Last name não pode estar vazio
        //Email deve ter o modelo email@provedor.com
        //Email não pode estar vazio (requisito adicional ao desafio)
        //Password não pode estar vazio
    //Ações em caso de erro:
        //Mostrar mensagem de erro;
        //Deslocar ícone de erro;
        //Diminuir margin das caixas do formulário (aquelas que tiverem o erro);
        //Aumentar tamanho do formulário na tela (para 2 ou mais erros);


document.getElementById("submit-btn").onclick = function(event){

    var fname = document.getElementById("fnamebox").value;
    var lname = document.getElementById("lnamebox").value;
    var email = document.getElementById("emailbox").value;
    var password = document.getElementById("passwordbox").value;
    var errorCount = 0;

    if (fname == ""){        
        showErrorMsg("fname-error");
        errorBoxStyle("fnamebox");
        errorCount += 1;
    } 

    if (lname == ""){        
        showErrorMsg("lname-error");
        errorBoxStyle("lnamebox");
        errorCount += 1;
    } 
      
     
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validRegex.test(email) == false & email != ""){        
        showErrorMsg("email-error");
        errorBoxStyle("emailbox");
        errorCount += 1;
    } 

    if(email == ""){
        document.getElementById("email-error").innerHTML = "Email can't be empty.";
        showErrorMsg("email-error");
        errorBoxStyle("emailbox");
        errorCount += 1;
    } 
    
    if (password == ""){        
        showErrorMsg("password-error");
        errorBoxStyle("passwordbox");
        errorCount += 1;
    } 

    if(errorCount >=2){
        document.getElementById("container").style.height = "90vh";
    }

    if(errorCount > 0){
        event.preventDefault();
    }

}

function showErrorMsg(id){
    document.getElementById(id).style.display = "block";
}

function errorBoxStyle(id){
    document.getElementById(id).style.backgroundPositionX = "97%";
    document.getElementById(id).style.marginBottom = "0";
    document.getElementById(id).style.border = "2px solid red";
    document.getElementById(id).placeholder = "";
    document.getElementById(id).style.color = "red";
}

