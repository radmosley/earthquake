function get_earthquakes() {
    $.ajax({
        url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
        type: 'GET',
        // data: {
        //     'format': 'geojson',
        //     'jsonerror': true
        //     // 'includeallmagnitudes': true
        // },
        success: function (response){
            var location = response.geometry.coordinates
            $('#humidity').text(humidity);
        },
    });
}
get_earthquakes()
  
  
  
  
  
  
  
  
  
  
  
  
  
  