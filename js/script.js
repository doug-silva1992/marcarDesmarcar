function marcaDesmarca() {
    let value = document.getElementById("btnMarcarDesmarcar").value
    let linhas = document.getElementById("total_linhas").value

    if(value == "Desmarcar"){
        for(let i = 1; i <= linhas; i++){
            document.getElementById(`teste${i}`).checked = false
        }
        document.getElementById("btnMarcarDesmarcar").value = "Marcar"
    }else if(value == "Marcar"){
        for(let i = 1; i <= linhas; i++){
            document.getElementById(`teste${i}`).checked = true
        }
        document.getElementById("btnMarcarDesmarcar").value = "Desmarcar"
    }
}