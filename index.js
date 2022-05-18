let btn = document.querySelector('.hello')

let cont = document.querySelector('.inf-me')

let logoF = document.querySelector('.fa-facebook')

let numero = 0

btn.addEventListener('click', ()=>{
    numero++
    cont.setAttribute('style', 'display:grid;')
    logoF.setAttribute('style', 'color:white;')
    
    if(numero === 2){
        cont.setAttribute('style', 'display:none;')
        logoF.removeAttribute('style')
        numero = 0
    }
})



