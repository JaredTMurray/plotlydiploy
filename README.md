# plotlydiploy

## Submission

### Overview
The  dashboard viewed in [index.html](https://github.com/JaredTMurray/plotlydiploy/blob/main/index.html) holds the demographic information that visualize the bacterial data infomration from sample.json file. The charts identify the top 10 bacterial species in their belly buttons. JavaScript [chart.js](https://github.com/JaredTMurray/plotlydiploy/blob/main/chart.js) holds the function that produces the charts in the following results. 

### Results
Focuses, the following deliverables:

-	Deliverable 1: Create a Horizontal Bar Chart
  From the javascript file [chart.js](https://github.com/JaredTMurray/plotlydiploy/blob/main/chart.js).I created the horizonial bar chart by storing the vaules of X and y from the vaulable OTU labels and . Varibale barData holds the sample array vaules from names values. Varibles y-value, xValue and textlabel holds the vaule for otu_ids, otu_labels, and sample_values that were used to plot the bar chart. I sort the values by n descending order. To create the layout for the bar chart that includes a title. I used var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      x: xValue,
      y: yValue,
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
      }. To plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);   See images below to view bar chart.
     
      ![](https://github.com/JaredTMurray/plotlydiploy/blob/main/Del-1.png)
      
      ![](https://github.com/JaredTMurray/plotlydiploy/blob/main/Bar.png)

-	Deliverable 2: Create a Bubble Chart
 From the JavaScript file [chart.js](https://github.com/JaredTMurray/plotlydiploy/blob/main/chart.js) line 117 to 167 create the bubble chart. Varibale bubbleTrace was used to plot the data with the layout.  and stored in var bubble = document.getElementById("bubble"). To create a variable that holds the samples array, I used  
      var bubbleArray = []. To create a variable that filters the samples for the object with the desired sample number, I used var resultBubbleArray = metadata.filter(sampleObj => sampleObj.id == sample) and finally, to holds the first sample in the array.
    var resultBubble = resultBubbleArray[0];
   
    // 1. Create the trace for the bubble chart.
    var bubbleTrace = {
       x:[sample_values],
      y: [otu_ids],
      text: ['940<br>id: 40', '941<br>size: 60', '943<br>size: 380', '944<br>size: 100'],
      mode: 'markers',
      marker: {
        size: [40, 60,  380, 100],
        sizemode: 'area'}};
    var bubbleData = [bubbleTrace];
  See Images below 
![](https://github.com/JaredTMurray/plotlydiploy/blob/main/del2.png)
![](https://github.com/JaredTMurray/plotlydiploy/blob/main/bubble.png)

-	Deliverable 3: Create a Gauge Chart
 From the JavaScript file [chart.js](https://github.com/JaredTMurray/plotlydiploy/blob/main/chart.js) line 168 to 270  create the horizonial gauge chart. Variables data  and layout were used to plot the chart. 
 
![](https://github.com/JaredTMurray/plotlydiploy/blob/main/)
1[](https://github.com/JaredTMurray/plotlydiploy/blob/main/)

-	Deliverable 4: Customize the Dashboard
 ![](https://github.com/JaredTMurray/plotlydiploy/blob/main/Screenshot_20221209_024056.png)

Upload the following to your GitHub pages repository:

-	The [index.html file](https://github.com/JaredTMurray/plotlydiploy/blob/main/index.html).
-	The [charts.js file](https://github.com/JaredTMurray/plotlydiploy/blob/main/chart.js)
-	The [samples.json file](https://github.com/JaredTMurray/plotlydiploy/blob/main/samples.json).

### Summary
In summary, all three chart shows the results for the biodiversity of the individuals base on their gender, location age and bbtype. these are filters on the demographic selection on the test subject id number.
