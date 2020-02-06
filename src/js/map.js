export default function () {

    let mymap = L.map('map').setView([40.66839, -73.8224], 17);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/light-v10',
        accessToken: 'pk.eyJ1Ijoic291bG1hdGUxMyIsImEiOiJjazRtbGZmMGEwMmZyM3FtaGR4MXZ1d3dqIn0.pfD64vHQTGtaioJZfICvDw',
        dragging: true,
    }).addTo(mymap);

    let circle = L.circle([40.6699, -73.82328], {
        color: 'white',
        fillColor: '#fff',
        fillOpacity: 0.3,
        radius: 50,
    }).addTo(mymap);

    let circletwo = L.circle([40.6699, -73.82328], {
        color: 'white',
        fillColor: '#fff',
        fillOpacity: 0.8,
        radius: 30,
    }).addTo(mymap);

    let circlethree = L.circle([40.6699, -73.82328], {
        color: '#7e5aff',
        fillColor: '#7e5aff',
        fillOpacity: 1,
        radius: 6,
    }).addTo(mymap);

    circle.bindPopup("Hello!");
    circletwo.bindPopup("Hello!");
    circlethree.bindPopup("Hello!");
}