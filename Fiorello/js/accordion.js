let heads1=document.querySelectorAll(".accordion .accordion-menu-1 .accHead");
let bodies1=document.querySelectorAll(".accordion .accordion-menu-1 .accBody");
for(let head1 of heads1){
head1.onclick=function(){
    let minus=document.querySelector(".accordion .fa-minus");
    let data =this.nextElementSibling.getAttribute("data-id");
    if(minus!=null){
        minus.classList.replace("fa-minus","fa-plus");
    }
    for(let body1 of bodies1){
        if(data==body1.getAttribute("data-id")){
            body1.classList.toggle("Active");
            this.classList.add("Selected")
        }
        else{
            body1.classList.remove("Active");
        }
        if(body1.classList.contains("Active")){
            body1.previousElementSibling.classList.add("Selected");
            body1.previousElementSibling.children[0].classList.replace("fa-plus","fa-minus");
        }else{
            body1.previousElementSibling.classList.remove("Selected")
            body1.previousElementSibling.children[0].classList.replace("fa-minus","fa-plus")
        }
    }
    
}
}
let heads2=document.querySelectorAll(".accordion .accordion-menu-2 .accHead");
let bodies2=document.querySelectorAll(".accordion .accordion-menu-2 .accBody");
for(let head2 of heads2){
head2.onclick=function(){
    let minus=document.querySelector(".accordion .accordion-menu-2 .fa-minus");
    let data =this.nextElementSibling.getAttribute("data-id");
    if(minus!=null){
        minus.classList.replace("fa-minus","fa-plus");
    }
    for(let body2 of bodies2){
        if(data==body2.getAttribute("data-id")){
            body2.classList.toggle("Active");
            this.classList.add("Selected")
        }
        else{
            body2.classList.remove("Active");
        }
        if(body2.classList.contains("Active")){
            body2.previousElementSibling.classList.add("Selected");
            body2.previousElementSibling.children[0].classList.replace("fa-plus","fa-minus");
        }else{
            body2.previousElementSibling.classList.remove("Selected")
            body2.previousElementSibling.children[0].classList.replace("fa-minus","fa-plus")
        }
    }
    
}
}
let heads3=document.querySelectorAll(".accordion2 .accordion-menu-1 .accHead");
let bodies3=document.querySelectorAll(".accordion2 .accordion-menu-1 .accBody");
for(let head3 of heads3){
head3.onclick=function(){
    let minus=document.querySelector(".accordion2 .accordion-menu-1 .fa-minus");
    let data =this.nextElementSibling.getAttribute("data-id");
    if(minus!=null){
        minus.classList.replace("fa-minus","fa-plus");
    }
    for(let body3 of bodies3){
        if(data==body3.getAttribute("data-id")){
            body3.classList.toggle("Active");
            this.classList.add("Selected2")
        }
        else{
            body3.classList.remove("Active");
        }
        if(body3.classList.contains("Active")){
            body3.previousElementSibling.classList.add("Selected2");
            body3.previousElementSibling.children[0].classList.replace("fa-plus","fa-minus");
        }else{
            body3.previousElementSibling.classList.remove("Selected2")
            body3.previousElementSibling.children[0].classList.replace("fa-minus","fa-plus")
        }
    }
    
}
}
let heads4=document.querySelectorAll(".accordion2 .accordion-menu-2 .accHead");
let bodies4=document.querySelectorAll(".accordion2 .accordion-menu-2 .accBody");
for(let head4 of heads4){
head4.onclick=function(){
    let minus=document.querySelector(".accordion2 .accordion-menu-2 .fa-minus");
    let data =this.nextElementSibling.getAttribute("data-id");
    if(minus!=null){
        minus.classList.replace("fa-minus","fa-plus");
    }
    for(let body4 of bodies4){
        if(data==body4.getAttribute("data-id")){
            body4.classList.toggle("Active");
            this.classList.add("Selected2")
        }
        else{
            body4.classList.remove("Active");
        }
        if(body4.classList.contains("Active")){
            body4.previousElementSibling.classList.add("Selected2");
            body4.previousElementSibling.children[0].classList.replace("fa-plus","fa-minus");
        }else{
            body4.previousElementSibling.classList.remove("Selected2")
            body4.previousElementSibling.children[0].classList.replace("fa-minus","fa-plus")
        }
    }
    
}
}