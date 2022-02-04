function Verificar(){ 
    var op = document.getElementsByName('inlineRadioOptions')
    if(op[1].checked){   
        window.alert("Resposta não aceita, responda corretamente!!!");
    }else{ 
        window.alert("Só vamoooo");
    }
}