const form = document.querySelector('.form')
const btn_envio = document.querySelector('.btn_envio')
const ajude_name = document.querySelector('.ajude_name')
const ajude_email = document.querySelector('.ajude_email')
const ajude_cpf = document.querySelector('.ajude_cpf')
const divProducts = document.getElementById("products");


form.addEventListener('submit', (e) => {
  
    e.preventDefault()

    let temErro = false

    if(ajude_name.value === ''){
        temErro = true
        ajude_name.classList.add('erro')
    } else{
        temErro = false
        ajude_name.classList.remove('erro')
    }
    if(ajude_email.value === ''){
        temErro = true
        ajude_email.classList.add('erro')
    } else{
        temErro = false
        ajude_email.classList.remove('erro')
    }
    if(ajude_cpf.value === ''){
        temErro = true
        ajude_cpf.classList.add('erro')
    } else{
        temErro = false
        ajude_cpf.classList.remove('erro')
    }
})

const baseURL= "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";

function fetchApiData() {
    fetch(baseURL).then((response) =>
      response.json().then((data) =>
        data.products.map((product) => {
          products.innerHTML += `
          <div class="borda_produto">espaço</div>
                <span class="name_product">${product.name}</span>
                <span class="descrition_product">${product.description}</span>
                <span class="price_product">${product.oldPrice}</span>
                <span class="desconto">${product.price}</span>
                <span>${product.installments.count}x</span><span>${product.installments.value}</span>
                <button class="buy_btn">Comprar</button>
          `;
        })
      )
    );
  }

  
fetchApiData()
