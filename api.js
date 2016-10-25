var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var rawResponse = xhr.responseText;
        var data = JSON.parse(rawResponse);
        var dudes = data.objects[0].pokemon;
        
        for (var i = 0; i < dudes.length; i++) {    
           var x = document.getElementById("returnBox");
           x.innerHTML += "<h3 class=\"center-block\">" + dudes[i].name + "</h3>";
        }
    }
}

xhr.open("GET", "http://mean.codingcamp.us:6543/pokemon.json", true);
xhr.send();




//document.getElementById('btn1').addEventListener("click", function () {
//});