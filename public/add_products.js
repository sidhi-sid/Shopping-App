$(function (){
    let productname=$('#productname')
    let manufacturer=$('#manufacturer')
    let price=$('#price')
    $('#btnproductadd').click(function(){
        addproduct(
            productname.val(),
            manufacturer.val(),
            price.val(),
            function (addedproduct){
                console.log("Added")
                window.alert("Added"+addedproduct.name+"to Database")
            }
        )
    })
})