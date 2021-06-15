
// Funcion para biografia
function toggleSections(){
    var readMoreContentElement = document.getElementById("read-more-content");
    var readMoreButton = document.getElementById("readMore");
    if (readMoreContentElement.style.display == "block") {
        readMoreContentElement.style.display = "none";
        readMoreButton.textContent = "Leer mas";
    } else {
        readMoreContentElement.style.display ="block";
        readMoreButton.textContent = "Leer menos";
    }
}
    //Funcion para galeria 
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

                hobbieBtnElement.style.backgroundColor = "#ababac";
                creenciaBtnElement.style.backgroundColor = "#ababac";
                memoriasBtnElement.style.backgroundColor = "#878992";
            break;
            case "creencia":
                hobbieElement.style.display = "none";
                memoriasElement.style.display ="none";
                creenciaElement.style.display = "block";
                
                memoriasBtnElement.style.backgroundColor = "#ababac";
                hobbieBtnElement.style.backgroundColor = "##ababac";
                creenciaBtnElement.style.backgroundColor = "#878992";
                break;    
            default:
                memoriasElement.style.display = "none";
                creenciaElement.style.display = "none";
                hobbieElement.style.display = "block";

                creenciaBtnElement.style.backgroundColor = "#ababac";
                memoriasBtnElement.style.backgroundColor = "#ababac";
                hobbieBtnElement.style.backgroundColor = "#878992";
                break;
        }
    }        


    