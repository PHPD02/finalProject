<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2H2_b-Z3UEgNQfh53tCUpYQdVI0nxPSc"></script>


  var watchId, geocoder, startLat, startLong;

  var start = 1;
  var btn = document.getElementById("btn_locate");
  function locate() {
    if (navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        onSuccess,
        onError,

        {
          maximumAge: 60 * 1000,
          timeout: 5 * 60 * 1000,
          enableHighAccuracy: true,
        }
      );
    }
  }

  function onSuccess(position) {
    var currentLat = position.coords.latitude;

    var currentLong = position.coords.longitude;

    if (start == 1) {
      startLat = currentLat;

      startLong = currentLong;

      start = 0;
    }

    var geocoder = new google.maps.Geocoder();

    var latlong = new google.maps.LatLng(currentLat, currentLong);

    geocoder.geocode({ latLng: latlong }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results) {
          document.getElementById("location").innerHTML =
            "You are now near " + results[0].formatted_address;
        }
      } else alert("Could not get the geolocation information");
    });

    var mapOptions = {
      center: new google.maps.LatLng(startLat, startLong),

      zoom: 10,

      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    // 上面是定位地址，以下為地圖
    // var map = new google.maps.Map(
    //   document.getElementById("mapArea"),
    //   mapOptions
    // );

    // var marker = new google.maps.Marker({
    //   position: latlong,

    //   map: map,
    // });
    // -----------
  }
  function onError(error) {
    switch (error.code) {
      case PERMISSION_DENIED:
        alert("User denied permission");

        break;

      case TIMEOUT:
        alert("Geolocation timed out");

        break;

      case POSITION_UNAVAILABLE:
        alert("Geolocation information is not available");

        break;

      default:
        alert("Unknown error");

        break;
    }
  }

