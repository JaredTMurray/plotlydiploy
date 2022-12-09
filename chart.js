function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}
//-----------------------------Deliverable 1: Create a Horizontal Bar Chart----------------------------------------------------
// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {

    // 3. Create a variable that holds the samples array. 
    
    var ysampleData = data
    //["940", "941", "943", "944", "945", "946", "947", "948", "949", "950", "952", "953", "954", "955", "956", "958", "959", "960", "961", "962", "963", "964", "966", "967", "968", "969", "970", "971", "972", "973", "974", "975", "978", "1233", "1234", "1235", "1236", "1237", "1238", "1242", "1243", "1246", "1253", "1254", "1258", "1259", "1260", "1264", "1265", "1273", "1275", "1276", "1277", "1278", "1279", "1280", "1281", "1282", "1283", "1284", "1285", "1286", "1287", "1288", "1289", "1290", "1291", "1292", "1293", "1294", "1295", "1296", "1297", "1298", "1308", "1309", "1310", "1374", "1415", "1439", "1441", "1443", "1486", "1487", "1489", "1490", "1491", "1494", "1495", "1497", "1499", "1500", "1501", "1502", "1503", "1504", "1505", "1506", "1507", "1508", "1510", "1511", "1512", "1513", "1514", "1515", "1516", "1517", "1518", "1519", "1521", "1524", "1526", "1527", "1530", "1531", "1532", "1533", "1534", "1535", "1536", "1537", "1539", "1540", "1541", "1542", "1543", "1544", "1545", "1546", "1547", "1548", "1549", "1550", "1551", "1552", "1553", "1554", "1555", "1556", "1557", "1558", "1561", "1562", "1563", "1564", "1572", "1573", "1574", "1576", "1577", "1581", "1601"];


    data.sort(function(a, b) {
      return parseFloat(b.ysampleData) - parseFloat(a.ysampleData);
    });
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    data = data.slice(0, 10);
    //  5. Create a variable that holds the first sample in the array.
    data = data.reverse();

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var yValue = ['otu_ids'];

    var xValue = ['sample_values'];

    var textlabel = ['otu_labels'];
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = {
      x: data.map(row => row.ysampleData),
      y: data.map(row => row.ysampleData),
      text: data.map(row => row.textlabel),
       type: "bar",
      marker: {
        color: 'rgba(55,128,191,0.6)',
        width: 1
      },
      orientation: "h",
      type: 'sort',
      target: 'x',
      order: 'ascending'
    };

    // 8. Create the trace for the bar chart. 
    var barData = [yticks
      
    ];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 20 Bacteria Cultures Found",
      x: xValue,
      y: yValue,
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
      }
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);
  });
}

//---------------------Deliverable 2: Create a Bubble Chart -------------------------------------------

// Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
   // Plotly.newPlot(); 
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);
    // 1. Create the trace for the bubble chart.
    var bubbleTrace = {
       x: [1, 500, 1000, 1500, 2000, 2500, 3000, 3500],
      y: [1, 50, 100, 150, 200, 250, 300, 350],
      //x:[sample_values],
      //y: [otu_ids],
      text: ['A<br>id: 40', 'B<br>size: 60', 'C<br>size: 380', 'D<br>size: 100'],
      mode: 'markers',
      marker: {
        size: [40, 60, 380, 100],
        sizemode: 'area'
      }
    };

    var bubbleData = [bubbleTrace
   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      x:'OTU ID',
      showlegend: false,
      height: 600,
      width: 1000
    };

    // 3. Use Plotly to plot the data with the layout.
    //Plotly.newPlot();
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);
  });
}
//---------------------------Deliverable 3: Create a Gauge Chart--------------------------------------------------------------

var data = [
  {
    type: "indicator",
    mode: "gauge+number+delta",
    value: 2,
    title: { text: "Belly Button Washing Fequency", font: { size: 24 } },
    delta: { reference: 8, increasing: { color: "RebeccaPurple" } },
    gauge: {
      axis: { range: [null, 10], tickwidth: 1, tickcolor: "darkblue" },
      bar: { color: "black" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [0, 2], color: "red" },
        { range: [2, 4], color: "orange" },
        { range: [4, 6], color: "yellow" },
        { range: [6, 8], color: "royalblue" },
        { range: [8, 10], color: "green" }
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
        value: 9
      }
    }
  }
];

var layout = {
  width: 500,
  height: 400,
  margin: { t: 20, r: 50, l: 70, b: 90 },
  paper_bgcolor: "lavender",
  font: { color: "darkblue", family: "Arial" }
};

Plotly.newPlot('gauge', data, layout);