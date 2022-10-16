const form = document.querySelector('.form')
const btn_envio = document.querySelector('.btn_envio')
const ajude_name = document.querySelector('.ajude_name')
const ajude_email = document.querySelector('.ajude_email')
const ajude_cpf = document.querySelector('.ajude_cpf')
const divProducts = document.getElementById("products")
const msg = document.querySelector('.msg')
const btn_more = document.querySelector('.more_products')
const compartilhe_form = document.querySelector('.compartilhe_form')
const name_input = document.querySelector('.name_input')
const email_input = document.querySelector('.email_input')
const btn_envio2 = document.querySelector('.btn_envio2')
const msg2 = document.querySelector('.msg2')


function confirmarEnvio(){
    form.classList.add('hidden')
    msg.classList.remove('hidden')
}


form.addEventListener('submit', (e) => {
  
    e.preventDefault()

    let temErro = false

    if(ajude_name.value === ''){
        temErro = true
        ajude_name.classList.add('erro')
    } else{
        ajude_name.classList.remove('erro')
    }
    if(ajude_email.value === ''){
        temErro = true
        ajude_email.classList.add('erro')
    } else{
        ajude_email.classList.remove('erro')
    }
    if(ajude_cpf.value === ''){
      temErro = true
        ajude_cpf.classList.add('erro')
    } else{
        ajude_cpf.classList.remove('erro')
    }
    console.log(temErro)
    
    if(temErro===false){
      btn_envio.addEventListener('click', (confirmarEnvio()))
    }
})

const baseURL= "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";



function fetchApiData(baseURL) {
    fetch(baseURL).then((response) =>
      response.json().then((data) => 
        data.products.map((product) => { 
          console.log(data)
          products.innerHTML += `
          
            <div class="products">
                  <div class="borda_produto"><img src="${product.image}"></div>
                  <span class="name_product">${product.name}</span>
                  <span class="descrition_product">${product.description}</span>
                  <span class="price_product">De: R$${product.oldPrice}</span>
                  <span class="desconto">Por: R$${product.price}</span>
                  <span>Ou ${product.installments.count}x de R$${product.installments.value}</span>
                  <button class="buy_btn">Comprar</button>
              </div>
          `
        })
      )
    )
  }
fetchApiData(baseURL)

/*  
    I set this variable, so that whenever I render my newURL function for sending me the data for the next page
    In the url I should specific number of page I want 
    And because I don't have an input to set the number, I just want to whenver I click on the button get more data 
    So the good thing is to set variable that increment each time I click on the function, which represent the number of pages
*/
let numberOfPages = 1;
function newURL(){
  // numberOfPages = numberOfPages + 1    // it's the same thing 
  numberOfPages += 1;
  // here I used template literals 
  fetchApiData(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${numberOfPages}`);
}

function confirmarEnvio2(){
  compartilhe_form.classList.add('hidden')
  msg2.classList.remove('hidden')
}

compartilhe_form.addEventListener('submit', (e) => {
  
  e.preventDefault()

  let temErro2 = false

  if(name_input.value === ''){
    temErro2 = true
    name_input.classList.add('erro')
  }else{
    name_input.classList.remove('erro')
  }
  if(email_input.value === ''){
    temErro2 = true
    email_input.classList.add('erro')
  }else{
    email_input.classList.remove('erro')
  }

  if(temErro2===false){
    btn_envio2.addEventListener('click', (confirmarEnvio2()))
  }
})


// 1 - Try to use semicolons, it's really a good practice, it does'nt effect 
// 2 - Try to use comments as much as you can
// 3 - Would be a great idea if you used OOP, if not it's tottaly fine
// 4 - And finally, I just want to say, that you really did a great job, your code is really fancy, good luck and keep going 
// Zouhair Sahtout 20:05