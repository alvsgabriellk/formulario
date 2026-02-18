const form = document.querySelector("#form")
const nameinput = document.querySelector("#name")
const emailinput = document.querySelector("#email")
const passwordinput = document.querySelector("#password")
const jobselect = document.querySelector("#job")
const messagetextarea = document.querySelector("#message")

// Validação básica
form.addEventListener("submit", function(event) {
    event.preventDefault()

    if (nameinput.value === "") {
        alert("Por favor, preencha o seu nome")
        return
    }

    if (emailinput.value === "" || !isEmailValid(emailinput.value)) {
        alert("Por favor, preencha o seu email")
        return
    }

    if (!validatePassword(passwordinput.value, 8)) {
        alert("A senha precisa ser no mínimo 8 dígitos.")
        return
    }

    if (jobselect.value === "") {
        alert("Por favor, selecione a sua situação.")
        return
    }

    if (messagetextarea.value === "") {
        alert("Por favor, escreva uma mensagem.")
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


// Validação para a senha
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        return true
    }

    return false
}
