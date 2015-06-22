@import '../functions/inputs.js'
@import '../globals/chartTypes.js'

var input, values,
    firstChoices, group, points,
    seriez, seriesLayer, seriesArray;

//First input
input = askForInput('Generate how many [ points, number of charts ]?');

input = input.split(',');

if(input.length <= 1) {
  input.push('');
}
//row = point, col = series
points = parseInt(input[0]) || 1;
seriez = parseInt(input[1]) || 1;

//If we're using artboards, add to the current artboard
if(doc.currentPage().artboards().count() > 0) {
  var currentArtboard = doc.currentPage().currentArtboard();
  group = currentArtboard.addLayerOfType('group');
} else {
  group = doc.currentPage().addLayerOfType('group');
}

group.setName('chart');

for(i=seriez; i>0; i--) {
    var newGroup = group.addLayerOfType('group');
    newGroup.setName('series');
    seriesArray = genSeries(points, i, dt);
    generateChart(seriesArray,i,newGroup);
}

function genSeries(numSeries, index, dt) {
    var result = [],
        num;

    for(var i = numSeries; i>0; i--) {
        num = chartTypes[dt].val(index, values);
        result.push(num);
    }

    return result;
}

function generateChart(sArray,i, group) {
    chartTypes[dt].generate(sArray,i,group);
}

function isText(layer) {
    return layer.isMemberOfClass(MSTextLayer);
}
