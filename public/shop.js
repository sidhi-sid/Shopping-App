function fetchproducts(done){
    $.get('/api/products',function(data){
        done(data)
    })
}
function createproductcard(product){
    return $(` <div class="col-4 card mx-2 p-2">
    <h4 class="product-name">${product.name}</h4>
    <div class="product-manufacturer">${product.manufacturer}</div>
     <div class="row">
         <div class="col-6 m-3">
            <b>${product.price}</b> 
         </div>
             <button class=" col btn btn-primary m-3 p-3">Buy</button> 
           </div>
           </div>`
     )
}

