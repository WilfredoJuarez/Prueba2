const btn = document.querySelector('.btn1');

btn.addEventListener('click', function(){
    setTimeout(() =>{
        const texto = document.querySelector('.texto1');    
        texto.textContent="NUEVO TEXTO";
        texto.classList.add('claseNueva');
    },5000);
});
