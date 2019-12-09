"use strict";

if ("geolocation" in navigator) {
    console.log("geolocalização funcionando owo");

    var posicao = navigator.geolocation.getCurrentPosition(function (posicao) {
        console.log(posicao);
        var coordenadas = document.getElementById('coordenadas');
        coordenadas.innerHTML = "Latitude: " + posicao.coords.latitude + " <br> Longitude: " + posicao.coords.longitude;
    });
} else {
    console.log("o navegador não suporta geolocalização");
}