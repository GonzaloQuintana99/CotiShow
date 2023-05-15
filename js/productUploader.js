// function set_product(){

//     let product_name = document.getElementById("ProductName");
//     let product_price = document.getElementById("ProductPrice");
//     let product_stock = document.getElementById("ProductStock");
//     let product_img = document.getElementById("ProductImg");

//     let product = {"name": product_name.value , "price": product_price.value , "stock": product_stock.value , "img": product_img.value};

//     products.push(product);

//     let storageProduct = JSON.stringify(products);
    
//     localStorage.setItem("Products", storageProduct);


//     let traer_productos = localStorage.getItem("Products");

//     console.log( JSON.parse(traer_productos) );
// };

// let btnAddProduct = document.getElementById("btnAddProduct");
// btnAddProduct.addEventListener("click", set_product);
