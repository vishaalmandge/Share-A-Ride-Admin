/* $.ajax({
        asyn: true,
        crossDomain: true,
        url: "http://10.26.32.4/api/rating-service/rate/ridecount/week",
        dataType: 'JSON',
        callback: 'callback',
        type: 'GET',
        success: function(result) {
            var chartdata = jQuery.parseJSON(JSON.stringify(result))
            console.log(result)
        }
    });*/

AmCharts.makeChart("rides", {
    "type": "serial",
    "hideCredits": true,
    "fixedColumnWidth": '10px',
    "dataLoader": {
        "url": "http://10.26.32.4/api/rating-service/rate/ridecount/week",
        "format": "json",
        "showErrors": true,
        "noStyles": true,
        "async": true
    },
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "right",
        "useGraphSettings": true,
        "markerSize": 10
    },
    "valueAxes": [{
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.2,
        "dashLength": 0
        }],
    "gridAboveGraphs": true,
    "startDuration": 1,
    /*"dataProvider": [{
            "Date": '16 Aug 2018',
            "Completed Rides": 'completedTrip',
            "Not Ended": 60,
            "Canceled Rides": 30,

        }
    ],*/
    "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0,
        "minimum": 0,
        "maximum": 50,
        "gridCount": 1

        }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillColors": "#47b012",
        "lineColor": "#47b012",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Completed Rides",
        "type": "column",
        "color": "#000000",
        "valueField": "completedTrip",
        "fixedColumnWidth": 25
        }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillColors": "#fff138",
        "lineColor": "#fff138",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Not Ended",
        "type": "column",
        "color": "#000000",
        "valueField": "activeTrip",
        "fixedColumnWidth": 25
        }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillColors": "#dd111b",
        "lineColor": "#dd111b",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Canceled Rides",
        "type": "column",
        "color": "#000000",
        "valueField": "cancelledTrip",
        "fixedColumnWidth": 25
        }],
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "creationDate",
    "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20,
        "labelRotation": 45
    }
});
