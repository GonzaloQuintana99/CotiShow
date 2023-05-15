const productContainer = document.getElementById('product-container');
const viewCart = document.getElementById("viewCart");


const btntodo = document.querySelectorAll("#btntodo");
const btnanteojos = document.querySelectorAll("#btnanteojos");
const btncollares = document.querySelectorAll("#btncollares");
const btncorbatas = document.querySelectorAll("#btncorbatas");
const btnpulseras = document.querySelectorAll("#btnpulseras");
const btnvinchas = document.querySelectorAll("#btnvinchas");
const btnvarios = document.querySelectorAll("#btnvarios");

const searcher = document.querySelector(".buscador");
const btnsearcher = document.querySelector(".buscadorbtn");
const searchedResult = document.querySelector("#searchedResult");


products.forEach((item) => {

  let productContent = document.createElement("div");

  if(item.stock > 0){
    stock = `<h3 class="green">En Stock</h3>`
  }else{
    stock = `<h3 class="red">Sin Stock</h3>`
  }

  productContent.innerHTML = `
  <div class="card filter animate__animated animate__fadeIn">
  <img src=${item.img} class="card-img-top" alt="anteojo led neon">
  <div class="card-information">
    <div class="card-text-infoid">${item.id}<h4 class="stock">${item.category}</h4></div>
    <div class="card-text-infostock">${stock}<p class="stock">${item.stock}</p></div>
    </div>
  <div class="card-body">
    <h2 class="card-title">${item.title}</h2>
    <div class="card-information">
      <div class="card-text-infop"><strong id="card-text-infop">$${item.price}</strong><span>.-</span>
      <br><p class="special-price">Precio especial</p></div>
      <div class="card-text-infos"><p style="background-color: rgb(235, 235, 235); margin-top: 10px;"><i class="fa-regular fa-credit-card"></i> 12 x $${item.cartprice}</p></div>
      </div>
  </div>
  <button class="btnaddcart" id="btnaddcart">Agregar al carrito</button>
  </div>
    `;
  productContainer.append(productContent);
})



// FILTROS //


for (let btnt of btntodo) {
  btnt.addEventListener("click", filterTodo);
}

function filterTodo(){

  let pdf = document.querySelectorAll('.filter')

  for (var i = 0; i < pdf.length; i++) {
      pdf[i].style.display = "";
  }
  }

for (let btna of btnanteojos) {
  btna.addEventListener("click", filterAnteojos);
}

function filterAnteojos(){

  let pdf = document.querySelectorAll('.filter')

  for (var i = 0; i < pdf.length; i++) {
    if(pdf[i].querySelector("h4").textContent != "Anteojos"){
      pdf[i].style.display = "none";
  }else{
    pdf[i].style.display = "";
  }
  }
}


for (let btnc of btncollares) {
  btnc.addEventListener("click", filterCollares);
}

function filterCollares(){

  let pdf = document.querySelectorAll('.filter')

  for (var i = 0; i < pdf.length; i++) {
    if(pdf[i].querySelector("h4").textContent != "Collares"){
      pdf[i].style.display = "none";
  }else{
    pdf[i].style.display = "";
  }
  }
}


for (let btnco of btncorbatas) {
  btnco.addEventListener("click", filterCorbatas);
}

function filterCorbatas(){

  let pdf = document.querySelectorAll('.filter')

  for (var i = 0; i < pdf.length; i++) {
    if(pdf[i].querySelector("h4").textContent != "Corbatas"){
      pdf[i].style.display = "none";
  }else{
    pdf[i].style.display = "";
  }
  }
}


for (let btnp of btnpulseras) {
  btnp.addEventListener("click", filterPulseras);
}

function filterPulseras(){

  let pdf = document.querySelectorAll('.filter')

  for (var i = 0; i < pdf.length; i++) {
    if(pdf[i].querySelector("h4").textContent != "Pulseras"){
      pdf[i].style.display = "none";
  }else{
    pdf[i].style.display = "";
  }
  }
}


for (let btnv of btnvinchas) {
  btnv.addEventListener("click", filterVinchas);
}

function filterVinchas(){

  let pdf = document.querySelectorAll('.filter')

  for (var i = 0; i < pdf.length; i++) {
    if(pdf[i].querySelector("h4").textContent != "Vinchas"){
      pdf[i].style.display = "none";
  }else{
    pdf[i].style.display = "";
  }
  }
}


for (let btnva of btnvarios) {
  btnva.addEventListener("click", filterVarios);
}

function filterVarios(){


    let pdf = document.querySelectorAll('.filter')

    for (var i = 0; i < pdf.length; i++) {
      if(pdf[i].querySelector("h4").textContent != "Varios"){
        pdf[i].style.display = "none";
    }
    else{
      pdf[i].style.display = "";
    }
    }
  }


const filter = ()=> {


  searchedResult.innerHTML = "";

  const searched = searcher.value.toLowerCase();


  for (const product of products) {
    let name = product.title.toLowerCase();
    if(searcher.value === ""){
      searchedResult.innerHTML = "";
    }
    else if(name.indexOf(searched) !== -1){
      searchedResult.innerHTML += `
      <tr class="productSearched">
      <td class="imagenSearch"><img src=${product.img}></td>
      <td class="titleSearch"><p>${product.title}</p></td>
      <td class="priceSearch">$${product.price}</td>
      </tr>
      `
    }
}
}

searcher.addEventListener("keyup", filter)
// btnsearcher.addEventListener("click", filter);
