const form = document.querySelector("#form")
const nameinput = document.querySelector("#name")
const emailinput = document.querySelector("#email")
const password = document.querySelector("#password")
const jobselect = document.querySelector("#job")
const messagetextarea = document.querySelector("#message")

// Validação básica
form.addEventListener("submit", function(event) {
    event.preventDefault()

    if (nameinput === "") {
        alert("Por favor, preencha o seu nome")
        return
    }

    if (emailinput === "" || isEmailValid(emailinput.value)) {
        alert("Por favor, preencha o seu email")
        return
    }

    // Se tiver tudo ok -> envio do form:
    form.submit()
})

// Validação para o email
function isEmailValid(email) {
    
    // A regra tem que seguir esse modelo de texto
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )
    
    // Validação de regra do padrão do regexp
    if (emailRegex.test(email)) {
        return true
    }

    return false
}
