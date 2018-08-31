$.ajax({
    asyn: true,
    crossDomain: true,
    url: "http://10.26.32.11/api/rating-service/rate/current/gettrips",
    dataType: 'JSON',
    callback: 'callback',
    type: 'GET',
    success: function (result) {
        //console.log(result)
        var jsobj = jQuery.parseJSON(JSON.stringify(result))
        //console.log(jsobj)
        /*for (var propertyName in obj) {
            console.log(propertyName + ":");
            for (var internalPropertyName in obj[propertyName]) {
                console.log(internalPropertyName + ":" + obj[propertyName][internalPropertyName]);
            }
        }*/
        $('#total_sh').text(jsobj.scheduled.driver_count + jsobj.scheduled.passenger_count);
        $('#schedule-driver').text(jsobj.scheduled.driver_count);
        $('#schedule-pass').text(jsobj.scheduled.passenger_count);

        $('#total_ac').text(jsobj.active.driver_count + jsobj.active.passenger_count);
        $('#Active-driver').text(jsobj.active.driver_count);
        $('#Active-pass').text(jsobj.active.passenger_count);

    }
});


