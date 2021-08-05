function insert (promise){
    let number = document.getElementById('resultado').innerHTML
    if (document.getElementById('resultado').innerHTML.length <= 14){
        document.getElementById('resultado').innerHTML = number + promise
    }
}

function apagar(){
    document.getElementById('resultado').innerHTML = ""
}

function limpar(){
    let num = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = num.substring(0, num.length - 1)
}

function calcular(){
    let num = document.getElementById('resultado').innerHTML
    if (num){
        document.getElementById('resultado').innerHTML = eval(num)
    }else {
        document.getElementById('resultado').innerHTML = "erro"
    }
}