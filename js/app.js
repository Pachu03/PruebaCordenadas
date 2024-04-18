document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('btnCoordenadas');
    button.addEventListener('click', function() {
        initMap(); 
    });
});

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var altitude = position.coords.altitude;

            document.getElementById('lti').textContent = latitude;
            document.getElementById('lgi').textContent = longitude;
            
            if (altitude !== null && altitude !== undefined) {
                document.getElementById('alt').textContent = altitude; 
            } else {
                document.getElementById('alt').textContent = "Altitud no disponible";
            }

            var mapOptions = {
                center: {
                    lat: latitude,
                    lng: longitude
                },
                zoom: 15
            };


            var marker = new google.maps.Marker({
                position: {
                    lat: latitude,
                    lng: longitude
                },
            });
        });
    } else {
        alert('Tu navegador no soporta geolocalización.');
    }
}
