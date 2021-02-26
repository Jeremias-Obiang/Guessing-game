var vidas=5;
var arr=[];

//funcione que genera numero aleatorio
var rnd=function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
}
//nuestro numero aleatorio ...
var numero_aleatorio=rnd(20);//entre 1-20

alert(numero_aleatorio);


function comprobar(aleatorio,ingresado){

    if(ingresado>aleatorio){
        vidas=vidas-1;
        actualizarVistas('Muy alto !',vidas);
    }


    if(ingresado<aleatorio){
        vidas=vidas-1;
        actualizarVistas('Muy bajo !',vidas);

        
    }else if(ingresado===aleatorio){
        actualizarVistas('Numero correcto ',vidas);
        document.querySelector('body').style.backgroundColor='green';
        actualizarPuntajeMasAlto(vidas);
    }
}

function actualizarPuntajeMasAlto(score){
    arr.push(score);
    var max_elemento=Math.max.apply(Math,arr);
    document.querySelector('.puntajemasalto').textContent=`${max_elemento}`;
}


    
function ReiniciarJuego(){
    document.querySelector('.verificar').disabled=false;

    //actualizar color fondo 
    document.querySelector('body').style.backgroundColor="rgb(34, 34, 34)";

    //actualizar valor de la caja
    document.querySelector('.numero').textContent='?';

    //actualizar nuestra variable vida 
    vidas=5;
    document.querySelector('.puntaje').textContent=vidas;

    document.querySelector('.adivina').value='';

    document.querySelector('.mensaje').textContent='Juega ya !';

    numero_aleatorio=rnd(20);
}




function GameOver(){
    if(vidas>1)return false;
    else{
        return true;
    }
}




document.querySelector('.otravez').addEventListener('click',function(){
    ReiniciarJuego();
});




function actualizarVistas(mensaje,vida){
    document.querySelector('.mensaje').textContent=mensaje;
    document.querySelector('.puntaje').textContent=vida;
}



document.querySelector('.verificar').addEventListener('click',function(){
    if(GameOver()!=true){
        var nuestro_numero=Number(document.querySelector('.adivina').value);
        comprobar(numero_aleatorio,nuestro_numero);
    }else{
        actualizarVistas('Perdistes,Empieza otra vez !',vidas);
        document.querySelector('body').style.backgroundColor='red';
        document.querySelector('.verificar').disabled=true;
    }
});




//0) Generar el numero aleatorio .....
//1) crear funcion comrobadora ...
//2) Mostrar mensaje ....
//3) Decrementar el puntaje ...