var cont=1;
var img1="img/car-branco-bg.png";
var img2="img/car-cinza-bg.png";
var img3="img/car-cinza.png";
var img4="img/car-verme.png";
const tempo=2500;

var start=setInterval("Mostra()",tempo);

function Mostra()
{
    document.images["slide"].src=eval("img"+cont);

    if (cont==1)
        {
            document.getElementById("bt1").style.background="#101010";
            document.getElementById("bt2").style.background="#bbb";
            document.getElementById("bt3").style.background="#bbb";
            document.getElementById("bt4").style.background="#bbb";
        }
    else if (cont==2)
        {
            document.getElementById("bt2").style.background="#101010";
            document.getElementById("bt1").style.background="#bbb";
            document.getElementById("bt3").style.background="#bbb";
            document.getElementById("bt4").style.background="#bbb";
        }
    else if (cont==3)
        {
            document.getElementById("bt3").style.background="#101010";
            document.getElementById("bt1").style.background="#bbb";
            document.getElementById("bt2").style.background="#bbb";
            document.getElementById("bt4").style.background="#bbb";
        }
    else
        {
            document.getElementById("bt4").style.background="#101010";
            document.getElementById("bt1").style.background="#bbb";
            document.getElementById("bt2").style.background="#bbb";
            document.getElementById("bt3").style.background="#bbb";
        }

    if (cont < 4)
        cont ++;
    else
        cont=1;
}

function Posiciona(x)
{
    clearInterval(start);
    cont=x;
    Mostra();
    start=setInterval("Mostra()",tempo);
}