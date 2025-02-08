function jogarDado(){
    var numdado = document.getElementById('txtnumdado').value
    var result = window.document.getElementById('res')
    var sorteio = Math.floor(Math.random() * numdado) + 1

    result.style.textAlign = 'center'
    result.style.color = 'red'
    result.innerHTML = `Dado de ${numdado} lados jogado: ${sorteio}.`
    
}
