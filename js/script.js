const form = document.querySelector('.form')
const btn_envio = document.querySelector('.btn_envio')
const ajude_name = document.querySelector('.ajude_name')
const ajude_email = document.querySelector('.ajude_email')
const ajude_cpf = document.querySelector('.ajude_cpf')


form.addEventListener('submit', (e) => {
  
    e.preventDefault()

    const nameValue = ajude_name.value

    let temErro = false

    if(nameValue === ' '){
        temErro = true
        ajude_name.classList.add('erro')
    }
})