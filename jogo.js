var player = "X";
var numJog = 0;
var fim = false;

function checkjogo(id){
    var pc = document.getElementById('bot').checked;

    if(fim){
        return false;
    }

    var opt = verificaSrc(id)
    
    if(opt == "transp.png"){
        document.getElementById(id).src  = "img/" + player + ".png";
        numJog++;
        
        if(wincheck()){
            document.getElementById("msg").innerText = "Fim de Jogo, o player " + player + " Ganhou!!";
            fim = true;
            
            return false;
        }
        if(player == "X"){
            player = "O";
        } else {
            player = "X";
        }
        if(numJog >= 9){
            document.getElementById("msg").innerText = "O Jogo deu Velha";
            return false;
        }
    }
    
    if(pc && player == "O"){
        checkjogo(jogadaMaquina());
    }
}   

function verificaSrc(id){
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

function wincheck(){
    //VERTICAL
    if((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && (verificaSrc('c1') != "transp.png")){
        return true;
    }
    //VERTICAL    
    if((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c8')) && (verificaSrc('c2') != "transp.png")){
        return true;
    }
    //VERTICAL
    if((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && (verificaSrc('c3') != "transp.png")){
        return true;
    }
    //DIAGONAL
    if((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && (verificaSrc('c1') != "transp.png")){
        return true;
    }
    //DIAGONAL
    if((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && (verificaSrc('c3') != "transp.png")){
        return true;
    }
    //HORIZONTAL 1
    if((verificaSrc("c1") == verificaSrc("c2")) && (verificaSrc("c1") == verificaSrc("c3")) && verificaSrc("c1")!="transp.png"){
        return true
    }
    //HORIZONTAL 2
    if((verificaSrc("c4") == verificaSrc("c5")) && (verificaSrc("c4") == verificaSrc("c6")) && verificaSrc("c4")!="transp.png"){
        return true
    }
    //HORIZONTAL 3
    if((verificaSrc("c7") == verificaSrc("c8")) && (verificaSrc("c7") == verificaSrc("c9")) && verificaSrc("c7")!="transp.png"){
        return true
    }
    //DIAGONAL C1 TO C9
    if((verificaSrc("c1") == verificaSrc("c5")) && (verificaSrc("c1") == verificaSrc("c9")) && verificaSrc("c1")!="transp.png"){
        return true
    }
    return false;
}

function jogadaMaquina(){
    return 'c' + Math.floor((Math.random() * 9) + 1);
}
