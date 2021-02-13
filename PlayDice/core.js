function jogarDado(){
    var numdado = document.getElementById('txtnumdado').value
    var result = window.document.getElementById('res')
    var sorteio = Math.floor(Math.random() * numdado) + 1

    result.style.textAlign = 'center'
    result.style.color = 'red'
    result.innerHTML = `Dado de ${numdado} lados jogado: ${sorteio}.`
    
}

/*
TESTE CLASSE

function jogarDado(){
    class Dice {
        constructor(sides, result) {
            this.sides = sides
            this.result = result
        }
        getSides() {
            var sides = document.getElementById('txtnumdado').value
            sides = this.sides
            return this.sides, this.playDice()
        }
        playDice() {
            var play = Math.floor(Math.random() * this.sides) + 1
            play = this.result
            return this.result, this.statusShow()
        }
        statusShow() {
            var show = window.document.getElementById('res')
            show.style.textAlign = 'center'
            show.style.color = 'red'
            show.innerHTML = `Dado de ${this.sides} lados jogado: ${this.result}.`
        }
        
    }
    let myDice = new Dice(sides)
    // myDice.getSides()
    console.log(myDice)
}
*/
