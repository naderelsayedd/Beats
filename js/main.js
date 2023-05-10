// navbar and go top button
var header = document.getElementById("header")
var btnTop = document.getElementById("btnTop")

window.onscroll = function(){
    if(scrollY > 200){
        header.classList.add("headerFixed")
        btnTop.style.display = "block"
        btnTop.addEventListener("click" , function(){
            window.scroll({
                top : 0 ,
                behavior: 'smooth'
                
            })
        })
    }else
    {
        header.classList.remove("headerFixed")
        btnTop.style.display = "none"
    }
}

// api 
// sponser page
// //// link : https://api.escuelajs.co/api/v1/users
async function getApi() {
    let sponsers = document.getElementById("sponsers-list")
    let apiRespons = await fetch(`https://api.escuelajs.co/api/v1/users`)
    let finalApi = await apiRespons.json()
    let this_list = [] ;
    for(let i = 0 ;i <finalApi.length ; i++){
        this_list += `
        <div class="row child">
        <div class="col-md-6">Username :  ${finalApi[i].name}</div>
        <div class="col-md-6">Email :  ${finalApi[i].email}</div>
        </div>
        `
    }
    console.log(finalApi.length)
    sponsers.innerHTML = this_list ;

    
}getApi();


// hide loading
$(document).ready(function(){
    $(".loading").fadeOut(2000)
})

// cart count in shop datails
let plus = document.getElementById("plus");
let minus = document.getElementById("minus")
let count = document.getElementById("count")

plus.addEventListener("click",function(){
    count.value ++
})

minus.addEventListener("click" , function(){
    if(count.value >1){
        count.value --
    }else{
        count.value = 1
    }
})


// toggle paragraphs is shop details page
$(".additional").hide()
$("#active").click(function(){
    $(".additional").fadeOut(500)
    $(".active").fadeIn(500)
})

$("#additional").click(function(){
    $(".active").fadeOut(500)
    $(".additional").fadeIn(500)
})



// delete item from cart 
$("#x").click(function(){
    $(".row2").fadeOut(1000)
})
