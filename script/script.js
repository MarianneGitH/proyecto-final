function toggleSections(){

    var textoOculto = document.getElementById("textoOculto");



    if (textoOculto.style.display == "block") {

        textoOculto.style.display = "none";

        document.getElementById("toggleSections").textContent = "Leer mas";

    } else {

        textoOculto.style.display ="block";

        document.getElementById("toggleSections").textContent = "Leer menos";

    }

}
    
    function showCategory(type){
        var memoriasElement = document.getElementById("memorias");
        var creenciaElement = document.getElementById("creencia");
        var hobbieElement = document.getElementById("hobbie");

        var memoriasBtnElement = document.getElementById("memorias-btn");
        var creenciaBtnElement = document.getElementById("creencia-btn");
        var hobbieBtnElement = document.getElementById("hobbie-btn");

        switch (type) {
            case "memorias":
                hobbieElement.style.display = "none";
                creenciaElement.style.display = "none";
                memoriasElement.style.display = "block";

                hobbieBtnElement.style.backgroundColor = "#f47c24";
                creenciaBtnElement.style.backgroundColor = "#f47c24";
                memoriasBtnElement.style.backgroundColor = "#5a0302";
            break;
            case "creencia":
                hobbieElement.style.display = "none";
                memoriasElement.style.display ="none";
                creenciaElement.style.display = "block";
                
                memoriasBtnElement.style.backgroundColor = "#f47c24";
                hobbieBtnElement.style.backgroundColor = "#f47c24";
                creenciaBtnElement.style.backgroundColor = "#5a0302";
                break;    
            default:
                memoriasElement.style.display = "none";
                creenciaElement.style.display = "none";
                hobbieElement.style.display = "block";

                creenciaBtnElement.style.backgroundColor = "#f47c24";
                memoriasBtnElement.style.backgroundColor = "#f47c24";
                hobbieBtnElement.style.backgroundColor = "#5a0302";
                break;
        }
    }        


    