

let bars = document.querySelector("header nav .toggle")
let ul = document.querySelector("header nav ul")
let a = document.querySelectorAll("header nav ul a")

bars.onclick = function(){
    if(ul.style.display == "none"){
        ul.style.cssText = "display: flex !important; flex-direction: column; position: absolute; left: 0; top: 100%; width: calc(100% - 40px);"
        
    }
    else{
        ul.style.cssText = "display: none;"
    }    
}


let lis =  document.querySelectorAll("#Portfolio li")

let boxes =  document.querySelectorAll("#Portfolio .container_box .box")

lis.forEach((e) => {
    e.onclick = function(){
        lis.forEach((e) => {
            e.classList.remove("active")
        })
        e.classList.add("active")
        let name = e.innerHTML;
        boxes.forEach(function(e){
            e.style.display = "none"
        })
        let box = document.querySelectorAll(`.${name}`)
        box.forEach(function(e){
            e.style.display = "inherit"
        })
        if(name != "All"){
            document.querySelector(".container_box").style.minHeight = "230px"
            // document.querySelector(".container_box").style.cssText = "min-height: 230px;"
            // box.style.cssText = "flex-basis: 50%"
            box.forEach((e) => {
                e.style.cssText = "flex-basis: 50%"
            })
        }
        else{
            box.forEach((e) => {
                e.style.flexBasis = ""
            })
        }
    }
})



a.forEach((e) => {
    e.onmouseover = function() {
        a.forEach((e) => {
            e.classList.remove("active")
        })
        e.classList.add("active")
    }
})



let btn = document.querySelector(".circle")

window.onscroll = function () {
    if(window.scrollY >700){
        btn.style.display = "flex"
    }
    else{
        btn.style.display = "none"
    }
}

btn.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}