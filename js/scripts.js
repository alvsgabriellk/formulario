const form = document.querySelector("#form")
const nameinput = document.querySelector("#name")
const emailinput = document.querySelector("#email")
const password = document.querySelector("#password")
const jobselect = document.querySelector("#job")
const messagetextarea = document.querySelector("#message")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    if (nameinput === "") {
        alert("Por favor, preencha o seu nome")
        return
    }

    if (emailinput === "") {
        alert("Por favor, preencha o seu email")
        return
    }

    // Se tiver tudo ok -> envio do form:
    form.submit()
})