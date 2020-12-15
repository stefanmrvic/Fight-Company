var kswMap = L.map('ksw-map', {
    zoomControl: false
}).setView([44.7635, 20.4740], 16);

var tileLayerKSW = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3RlZmFubXJ2aWMiLCJhIjoiY2tpaHp3YjF0MGQ0NDJybWxuZzF6MHIzdCJ9.NIx8s8uOmLHFmBD0qSGoCw'
}).addTo(kswMap);

var kswMarker = L.marker([44.7631, 20.47417]).addTo(kswMap).bindPopup("Trg Oslobođenja 10, Borča");
