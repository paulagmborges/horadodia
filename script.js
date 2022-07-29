function carregar() {
var msg =window.document.getElementById('msg');
var img =window.document.getElementById('imagem');
var data= new Date();
var hora = data.getHours();
//var hora=15
msg.innerHTML=`Agora são ${hora} horas`;
if (hora>=0 && hora<12) {
    img.src='imagem/manha.png'
    document.body.style.background='#FFC26C'
    msg.innerHTML=`Agora são ${hora}horas.<br>Bom Dia!`
} else if (hora >=12 &&hora <18) {
    img.src='imagem/tarde.png'
    document.body.style.background='#C0D8D8'
    msg.innerHTML=`Agora são ${hora}horas.<br>Boa Tarde!`
}else {
    img.src= 'imagem/noite.png'
    Document.body.style.background='#203f54'
    msg.innerHTML=`Agora são ${hora} horas.<br>Boa Noite!`

}
}