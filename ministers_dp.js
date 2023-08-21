downloadDivAsImage = () => {
    if (inputName.value !="" && inputLocation.value !="" && fileDoc.value != "") {
        document.getElementById("showEmptyErrorMessage").style.display = "none";
        html2canvas(document.getElementById('content')).then(function(canvas) {
            const imgData = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.href = imgData;
            downloadLink.download = 'Ministers_Conference_dp.png';
            downloadLink.click();
            inputName.value ="" 
            inputLocation.value ="" 
             fileDoc.value = ""
        });
    }
    else  {
        document.getElementById("showEmptyErrorMessage").style.display = "block";
    }
}
$(document).ready( () =>{
    $('.toast').toast('show');
    $('.closeToast').click(function(){
        $(".toast").toast("hide");
    });
    fileDoc.onchange = evt => {
        const [file] = fileDoc.files
        if (file) {
         myImageTag.src = URL.createObjectURL(file);
        }
    }
});


        $("#inputName").on("keyup change", function(e) {
            $(".nameOut").text( $(this).val())
        });
        $("#inputLocation").on("keyup change", function(e) {
            $(".churchOut").text( $(this).val())
        });
        
        $("#myImage").click( ()=> {
            $("#fileDoc").click();
        });
   