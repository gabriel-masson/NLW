// Procurar  o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)


// Executar uma ação
function cloneField(){
    // Duplicar os campos. Quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //quando se refere Node indica que é uma tag html

    // Limpar os campos. Quais?do clone do schedule-item
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo, limpar
     
    fields.forEach(function(field){
        // Pegar o field do momento e limpa ele
        field.value = ""
        

    })

    // Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}