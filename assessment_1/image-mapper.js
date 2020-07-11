var loadFile = function(event) {
    var image = document.getElementById('image');
    var imageDetails = document.getElementById('imageDetails');

    image.src = URL.createObjectURL(event.target.files[0]);
    image.style = "display: block;"
    
    
    var imageWidth = image.clientWidth;
    var imageHeight = image.clientHeight;
    
    imageDetails.innerHTML = "Dimensions: " + imageWidth + " x " + imageHeight;
};

function clickHotspotImage(event) {
    var xCoordinate = event.offsetX;
    var yCoordinate = event.offsetY;
    
    var txt;
    var person = prompt("Description");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = person;
    }
    document.getElementById("demo").innerHTML = xCoordinate + " - " + yCoordinate + " - " + txt;
    
    document.body.innerHTML += "<div style= width: 10px; height: 10px; background: red; border: 1px solid red; left: " + xCoordinate + "px;></div>";
}