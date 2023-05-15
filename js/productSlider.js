const productSlider = document.getElementById('swiper-wrapper');


products.forEach((item) => {
    
  let sliderContent = document.createElement("div");

  if(item.stock > 0){
    stock = `<h3 class="green">En Stock</h3>`
  }else{
    stock = `<h3 class="red">Sin Stock</h3>`
  }

  sliderContent.className = "swiper-slide";
  if(item.bestsell == true){

  sliderContent.innerHTML = `
  <div class="card">
  <img src=${item.img} class="card-img-top" alt="anteojo led neon">
  <div class="card-information">
    <div class="card-text-infoid">${item.id}</div>
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

    productSlider.append(sliderContent);
}})