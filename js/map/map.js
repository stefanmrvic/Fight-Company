//Maps on Contact Us Page//

var banjicaMap = L.map('banjicamap').setView([44.7635, 20.4740], 16);
var borcaMap = L.map('borcamap').setView([44.87280, 20.45670], 19);

var tileLayerBanjica = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3RlZmFubXJ2aWMiLCJhIjoiY2tpaHp3YjF0MGQ0NDJybWxuZzF6MHIzdCJ9.NIx8s8uOmLHFmBD0qSGoCw'
}).addTo(banjicaMap);

var tileLayerBorca = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3RlZmFubXJ2aWMiLCJhIjoiY2tpaHp3YjF0MGQ0NDJybWxuZzF6MHIzdCJ9.NIx8s8uOmLHFmBD0qSGoCw'
}).addTo(borcaMap);

var banjicaMarker = L.marker([44.7631, 20.47417]).addTo(banjicaMap).bindPopup("SC Banjica, Crnotravska 4");
var borcaMarker = L.marker([44.87270, 20.45673]).addTo(borcaMap).bindPopup("Trg Oslobođenja 10, Borča");


