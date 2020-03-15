const canvas = document.getElementById('grafico')
const ctx = canvas.getContext('2d')


// plano de fundo do canvas
ctx.fillStyle = 'rgb(242, 242, 242)'
ctx.fillRect(0, 0, canvas.width, canvas.height)

// linha de margem abaixo dos dados
ctx.fillStyle = 'rgb(0, 0, 0, 0.40)'
ctx.fillRect(10, 410, 480, 1)

// legenda 'Dominante'
ctx.fillStyle = 'rgb(0, 0, 0)'
ctx.font = '15px Arial'
ctx.fillText('Dominante', 50, 425)

// legenda 'Influente'
ctx.fillStyle = 'rgb(0, 0, 0)'
ctx.font = '15px Arial'
ctx.fillText('Influente', 150, 425)

// legenda 'Editável'
ctx.fillStyle = 'rgb(0, 0, 0)'
ctx.font = '15px Arial'
ctx.fillText('Editável', 250, 425)

ctx.fillStyle = 'rgb(0, 0, 0)'
ctx.font = '15px Arial'
ctx.fillText('Condescendente', 350, 425)

function geraGrafico () {
    let tamanho1 = 0 - document.getElementById('d1').value / 2
    let tamanho2 = 0 - document.getElementById('d2').value / 2
    let tamanho3 = 0 - document.getElementById('d3').value / 2
    let tamanho4 = 0 - document.getElementById('d4').value / 2

    ctx.fillStyle = 'rgb(255, 0, 0)'
    ctx.fillRect(50, 400, 80, tamanho1)

    ctx.fillStyle = 'rgb(255, 242, 0)'
    ctx.fillRect(150, 400, 80, tamanho2)

    ctx.fillStyle = 'rgb(12, 186, 0)'
    ctx.fillRect(250, 400, 80, tamanho3)

    ctx.fillStyle = 'rgb(0, 0, 255)'
    ctx.fillRect(350, 400, 80, tamanho4)
}

function showCanvasHideInput () {
    document.getElementById('canvasDiv').style.display = 'block'
    document.getElementById('inputContainer').style.display = 'none'
}