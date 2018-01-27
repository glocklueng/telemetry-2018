

var g = new JustGage({
    id: "gauge",
    value: getRandomInt(0, 100),
    counter: true,
    min: 0,
    max: 100,
    title: "Speed",
    titleFontColor: "black",
    label: "KM/H",
    levelColors: [
        "#6eff6c",
        "#03ad00",
        "#00ad93"
    ]
});
setInterval(function() {
    g.refresh(getRandomInt(0, 100));
}, 500);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

document.getElementById("rotateButton").onmousedown = function(event) {
    var deg = document.getElementById('rotateDeg').value;
    document.getElementById("steering").style.WebkitTransform = "rotate(" + deg + "deg)";
}

// RAW DATA FUNCTIONALITY
var rawData = function(count) {
    //document.getElementById("raw").innerHTML = document.getElementById("raw").innerHTML + Math.random();
    var symbol = Math.floor(Math.random() * 8 + 1);
}

window.onload = function() {

    var dps = []; // data variable 1
    var dps2 = []; // data variable 2
    var dps3 = []; // data variable 3
    var dps4 = []; // data variable 4
    var dps5 = []; // data variable 5
    //Creating the multi part chart
    var chart = new CanvasJS.Chart("chartContainer", {
        backgroundColor: '',
        zoomEnabled: true,
        title: {
            text: "Data Chart"
        },
        axisY: {
            includeZero: false
        },
        axisX: {
            title: "Time (s)"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "bottom",
            fontSize: 12,
            fontColor: "Black",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "line",
            dataPoints: dps,
            xValueType: "number",
            showInLegend: true,
            name: "Measurement A",
        }, {
            visible: false,
            type: "line",
            dataPoints: dps2,
            xValueType: "number",
            showInLegend: true,
            name: "Measurement B",
        }, {
            visible: false,
            type: "line",
            dataPoints: dps3,
            xValueType: "number",
            showInLegend: true,
            name: "Measurement C",
        }, {
            visible: false,
            type: "line",
            dataPoints: dps4,
            xValueType: "number",
            showInLegend: true,
            name: "Measurement D",
        }, {
            visible: false,
            type: "line",
            dataPoints: dps5,
            xValueType: "number",
            showInLegend: true,
            name: "Measurement E",
        }]
    });
        //function that toggles the visible lines
    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

    var xVal = 0; //set an initial value in the x axis
    var yVal = 100; //set an initial value in the y axis
    var yVal2 = 110; //set an initial value in the y axis
    var yVal3 = 115; //set an initial value in the y axis
    var yVal4 = 101; //set an initial value in the y axis
    var yVal5 = 111; //set an initial value in the y axis
    var updateInterval = 1000; //time taken for each update
    var dataLength = 30; // number of dataPoints visible at any point

        //function that updtaes the current y values
    var updateChart = function(count) {
        count = count || 1;
        for (var j = 0; j < count; j++) {
            yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
            yVal2 = yVal2 + Math.round(5 + Math.random() * (-5 - 5));
            yVal3 = yVal3 + Math.round(5 + Math.random() * (-5 - 5));
            yVal4 = yVal4 + Math.round(5 + Math.random() * (-5 - 5));
            yVal5 = yVal5 + Math.round(5 + Math.random() * (-5 - 5));
            dps.push({
                x: xVal,
                y: yVal
            });
            dps2.push({
                x: xVal,
                y: yVal2
            });
            dps3.push({
                x: xVal,
                y: yVal3
            });
            dps4.push({
                x: xVal,
                y: yVal4
            });
            dps5.push({
                x: xVal,
                y: yVal5
            });
            xVal++;
        }
        if (dps.length > dataLength) {
            dps.shift();
            dps2.shift();
            dps3.shift();
            dps4.shift();
            dps5.shift();
        }
        chart.render();
    };

    //creating the chart for battery voltage
    var chart2 = new CanvasJS.Chart("voltageChart", {
        backgroundColor: '',
        animationEnabled: true,
        theme: "dark1",				
        axisY: {
            title: "Voltage (V)",
            titleFontColor: "black",
            titleFontSize: 13,
            labelFontColor: "black"
        },
        axisX: {
            labelFontColor: "black"
        },
        data: [{ 
            type: "column", 
            dataPoints: [
                {y: 30,label: "1"}, 
                {y: 29,label: "2"}, 
                { y: 25, label: "3" }, 
                { y: 32, label: "4" }, 
                { y: 30, label: "5" }, 
                { y: 12, label: "6" }, 
                { y: 15, label: "7" }, 
                { y: 17, label: "8" }, 
                { y: 19, label: "9" }, 
                { y: 22, label: "10" }, 
                { y: 25, label: "11" }, 
                { y: 24, label: "12" }, 
                { y: 2, label: "13" }, 
                { y: 40, label: "14" }, 
                { y: 35, label: "15" }, 
                { y: 12, label: "16" }, 
                { y: 30, label: "17" }, 
                { y: 23, label: "18" }, 
                { y: 25, label: "19" }, 
                { y: 15, label: "20" }, 
                { y: 40, label: "21" }, 
                { y: 35, label: "22" }, 
                { y: 16, label: "23" }, 
                { y: 32, label: "24" }, 
                { y: 20, label: "25" }, 
                { y: 27, label: "26" }, 
                { y: 20, label: "27" }, 
                { y: 35, label: "28" }, 
                { y: 23, label: "29" }, 
                { y: 12, label: "30" }, 
                { y: 30, label: "31" }, 
                { y: 29, label: "32" }, 
                { y: 25, label: "33" }, 
                { y: 32, label: "34" }, 
                { y: 30, label: "35" }, 
                { y: 12, label: "36" }, 
                { y: 15, label: "37" }, 
                { y: 17, label: "38" }, 
                { y: 19, label: "39" }, 
                { y: 22, label: "40" }, 
                { y: 25, label: "41" }, 
                { y: 24, label: "42" }, 
                { y: 2, label: "43" }, 
                { y: 40, label: "44" }, 
                { y: 35, label: "45" }, 
                { y: 12, label: "46" }, 
                { y: 30, label: "47" }, 
                { y: 23, label: "48" }, 
                { y: 25, label: "49" }, 
                { y: 15, label: "50" }, 
                { y: 40, label: "51" }, 
                { y: 35, label: "52" }, 
                { y: 16, label: "53" }, 
                { y: 32, label: "54" }, 
                { y: 20, label: "55" }, 
                { y: 27, label: "56" }, 
                { y: 20, label: "57" }, 
                { y: 35, label: "58" }, 
                { y: 23, label: "59" }, 
                { y: 12, label: "60" }, 
                { y: 40, label: "61" }, 
                { y: 35, label: "62" }, 
                { y: 16, label: "63" }, 
                { y: 32, label: "64" }, 
                { y: 20, label: "65" }, 
                { y: 27, label: "66" }, 
                { y: 20, label: "67" }, 
                { y: 35, label: "68" }, 
                { y: 23, label: "69" }, 
                { y: 12, label: "70" }, 
                { y: 20, label: "71" }, 
                { y: 27, label: "72" }] 
        }] 
    });
    chart2.render();

        //creating random values for the voltages
    var updateChart2 = function() {
        for (var i = 1; i <= 72; i++) {
            chart2.options.data[0].dataPoints[i] = {
                y: Math.floor(Math.random() * 30 + 1)
            };
        }

        chart2.render();
    }
    //chart for battery power 
    var batteryChart = new CanvasJS.Chart("batteryFill", {
        backgroundColor: '',
        animationEnabled: true,
        axisX:{
            labelFontSize: 12
        },
        axisY: {
            labelFontSize: 12,
            suffix: "%",
            maximum: 100,
            minimum: 0
        },
        dataPointWidth: 85,
        data: [{
            type: "column",
            color: "#014D65",
            dataPoints: [
                {label: "Battery Charge", y: 3}
            ]
        }]
    });
    batteryChart.render();
        //create random  battery power values
    var updatebatteryChart = function() {
        batteryChart.options.data[0].dataPoints[0] = {
            y: Math.floor(Math.random() * 40 + 1),
            label: "Battery Charge"
        };

        batteryChart.render();
    }
        //generate random 'RAW Data'
    function randomRawData(section, lines) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        document.getElementById(section).innerHTML = "";

        for (var j = 0; j < lines; j++) {
            for (var i = 0; i < 13; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            text += "<br>";
        }

        document.getElementById(section).innerHTML += text;
    }
        //generate random 'Error Data'
    function randomError(section, lines) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        document.getElementById(section).innerHTML = "";

        for (var j = 0; j < lines; j++) {
            text += "ERROR: "
            for (var i = 0; i < 7; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            text += "!<br>";
        }

        document.getElementById(section).innerHTML += text;
    }
        //update interval
    updateChart(dataLength);
    setInterval(function() {
        updateChart();
        updateChart2();
        updatebatteryChart();
        randomRawData("raw", 15);
        randomError("errors", 13);
    }, updateInterval);

    var xValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U'];
    var yValues = ['O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
    var zValues = [
      [0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75],
      [0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.20, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75],
      [0.75, 0.75, 0.75, 0.75, 0.75,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75],
      [0.00, 0.00, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 1.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75],
      [0.75, 0.75, 0.75, 0.75, 0.75,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75],
      [0.00, 0.00, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75],
      [0.75, 0.75, 0.75, 0.75, 0.75,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75],
      [0.00, 0.00, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.10, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75],
      [0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75],
      [0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.20, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75],
      [0.75, 0.75, 0.75, 0.75, 0.75,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75],
      [0.00, 0.00, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 1.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75],
      [0.75, 0.75, 0.75, 0.75, 0.75,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75],
      [0.00, 0.00, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75],
      [0.00, 0.00, 0.00, 0.75, 0.00,0.00, 0.00, 0.75, 0.75, 0.00,0.00, 0.00, 0.75, 0.10, 0.75, 0.00,0.00, 0.00, 0.75, 0.00, 0.75]
    ];

    var colorscaleValue = [
      [0, '#0066ff'],
      [1, '#ff0000']
    ];

    var data = [{
      x: xValues,
      y: yValues,
      z: zValues,
      type: 'heatmap',
      colorscale: colorscaleValue,
      showscale: false
    }];

    var layout = {
      annotations: [],
       margin: {
        l: 25,
        r: 0,
        b: 0,
        t: 25,
        pad: 3
      },
      xaxis: {
        ticks: '',
        side: 'top'
      },
      yaxis: {
        ticks: '',
        ticksuffix: ' ',
        width: 700,
        height: 700,
        autosize: true
      }
    };

    for ( var i = 0; i < yValues.length; i++ ) {
      for ( var j = 0; j < xValues.length; j++ ) {
        var currentValue = zValues[i][j];
        if (currentValue != 0.0) {
          var textColor = 'white';
        }else{
          var textColor = 'black';
        }
        var result = {
          xref: 'x1',
          yref: 'y1',
          x: xValues[j],
          y: yValues[i],
          text: zValues[i][j],
          font: {
            family: 'Arial',
            size: 10,
            color: 'rgb(50, 171, 96)'
          },
          showarrow: false,
          font: {
            color: textColor
          }
        };
        layout.annotations.push(result);
      }
    }

    Plotly.newPlot('heatMap', data, layout);


}