<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.2/d3.min.js"></script>
    <script src="https://d3js.org/d3.v3.min.js"></script>
    <script src="https://d3js.org/d3.v4.min.js"></script>

function convertArrayOfObjectsToCSV(args) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

function downloadCSV(args) {
    var data, filename, link;
    var csv = convertArrayOfObjectsToCSV({
        data: allSensorData
    });
    if (csv == null) return;

    filename = args.filename || 'VVA_Proj3_StaticSensorTimeData.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}



//--- set up base data -----//
const sensorIDs = [1,4,6,9,11,12,13,14,15];

const allSensorData = [];

//--- get data ----------
d3.csv("../data/StaticSensorReadingsREDOWNLOAD.csv", function (data) {


    //-- sort data by sensor id ----
    for (var i = 0; i < sensorIDs.length; i++) {
        for (var day = 6; day <= 10; day++) {
            for (var hour = 0; hour <= 23; hour++) {
                for (var min = 0; min <= 59; min++) {

                    //-- filter for time and sensorid

                    var loopTime = "4/" + day + "/20 " + hour + ":" + min;

                    var filteredData = data.filter(function (d) {
                        if (d["Sensorid"] == sensorIDs[i] && d["Timestamp"] == loopTime) {
                            return d;
                        }
                    })
                    //-- get average
                    var valueAvg = d3.mean(filteredData, function (d) {
                        return d.Value;
                    });

                    if (valueAvg == undefined) {
                        valueAvg = 0;
                    }

                    //-- add to allFiltData
                    var temp = {
                        sensorId : sensorIDs[i],
                        time: loopTime,
                        value: valueAvg
                    };
                    console.log("---time for " + sensorIDs[i] + ": " + loopTime)

                    allSensorData.push(temp);

                }
            }
        }

        console.log("finished data for: " + sensorIDs[i]);

    }

    downloadCSV({ filename: "VVA_Proj3_StaticSensorTimeData.csv" });

});

