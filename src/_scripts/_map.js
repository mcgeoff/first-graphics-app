var map = L.map('map', {
    scrollWheelZoom: false
});
// unlike google maps, leaflet does not have a built in tile layer
// good and bad - you have to set it up, but you can choose anything
// used a paid map from mapbox for quality but the api key is latimes so don't use it
//var sat = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA');
var sat = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA', {
    minZoom: 9
});

sat.addTo(map);
map.setView([33.983265, -118.306799], 18);

// a new javascript function
//homicides.forEach(o=>L.circleMarker([o.latitude,o.longitude])).addTo(map)

homicides.forEach(function(obj){
L.circleMarker([obj.latitude,  obj.longitude])
    .addTo(map)
    //.bindTooltip(obj.first_name + " " + obj.last_name);
    // template literal!
    .bindTooltip(`${obj.first_name} ${obj.last_name}`,{permanent:true})
    // permanent: true means tooltips show right away
    
})


// now we need an inset map - leaflet minimap

var sat2 = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA', {
    maxZoom: 9
});
var mini = new L.Control.MiniMap(sat2);
mini.addTo(map);