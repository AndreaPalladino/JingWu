document.querySelector('#wrapper').addEventListener('click', ()=>{

    let home = document.querySelector('#home')
    let who = document.querySelector('#who')
    let where = document.querySelector('#where')
    let kids = document.querySelector('#kids')
    let gallery = document.querySelector('#gallery')
    
    let overlay = document.querySelector('.overlay')



    home.classList.toggle('active')
    who.classList.toggle('active')
    where.classList.toggle('active')
    kids.classList.toggle('active')
    gallery.classList.toggle('active')
   
    overlay.classList.toggle('active')


})

