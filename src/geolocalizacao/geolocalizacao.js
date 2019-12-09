if("geolocation" in navigator){
    console.log("geolocalização funcionando owo");

    let posicao = navigator.geolocation.getCurrentPosition
    (function(posicao){
        console.log(posicao);
        let coordenadas = document.getElementById('coordenadas');
        coordenadas.innerHTML = `Latitude: ${posicao.coords.latitude} <br> Longitude: ${posicao.coords.longitude}`;
    });
}

else{
    console.log("o navegador não suporta geolocalização");
}