function resultado(){
    let nome = window.document.getElementById('aluno').value
    let n1 = Number(window.document.getElementById('nota1').value)
    let n2 = Number(window.document.getElementById('nota2').value)
    let n3 = Number(window.document.getElementById('nota3').value)
    let resu = window.document.getElementById('res')

    let media = (n1+n2+n3)/3
    resu.innerHTML = media
    
    if(media>=6){
        resu.innerHTML = `Parabéns, ${nome}! Sua média foi ${media} e você foi aprovado`
    }
    else{
        resu.innerHTML = `Parabéns, ${nome}! Você é um incompetente`
    }
}