document.querySelector("#add-time").addEventListener('click', clonarCampo)
//quando clicar no botao
//executar uma ação
   

function clonarCampo(){
    
     //duplicar os campos.  que campos?
     const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

     //pegar os campos. que campos?
     const fields = newFieldContainer.querySelectorAll('input')

     //para cada campo, limpar
     fields.forEach(function(fieldFromNow){
            //pega o field do momento e limpa ele
            fieldFromNow.value = ""


     })


     //mostrar na tela: que lugar?
     document.querySelector("#schedule-items").appendChild(newFieldContainer)
    
}    


