@import '../functions/inputs.js'
@import '../globals/chartTypes.js'

var input, values,
    firstChoices, group, points,
    seriez, seriesLayer, seriesArray;
var sLoc;


input = askForInput(chartTypes[dt].name, 'charts');
if(input.result == 1001) return;

points = Math.abs(input.points.intValue()) || 1;
seriez = Math.abs(input.items.intValue()) || 1;

group = [MSLayerGroup new];

//If we're using artboards, add to the current artboard
if(doc.currentPage().artboards().count() > 0) {
  var currentArtboard = doc.currentPage().currentArtboard();
  // group = currentArtboard.addLayerOfType('group');

  currentArtboard.addLayers([group]);
} else {
  doc.currentPage().addLayers([group]);
}

group.setName('chart');
group.frame().x = 100;
group.frame().y = 100;
group.frame().height = 120 * seriez;
if(/bar|Bar/.test(dt)) {
  group.frame().width = (points * 30) - 10;
} else if(/line|Line/.test(dt)) {
  group.frame().width = (points * 10);
}


for(i=seriez; i>0; i--) {
    var seriesGroup = [MSLayerGroup new];
    group.addLayers([seriesGroup]);

    seriesGroup.setName('series');

    seriesArray = genSeries(points, i, dt);
    sizeGroup(seriesGroup,seriesArray,i);
    // I'll use sLoc later, I swear it.
    sLoc = generateChart(seriesArray,i,seriesGroup);

}

function sizeGroup(seriesGroup, seriesArray, i) {
    var maxPoint = Math.max.apply(Math,seriesArray);
    var minPoint = Math.min.apply(Math,seriesArray);

    seriesGroup.frame().x = 0;
    seriesGroup.frame().y = 120*(i - 1);

    seriesGroup.frame().height = maxPoint - (minPoint < 0 ? minPoint : 0);

    if(/bar|Bar/.test(dt)) {
      seriesGroup.frame().width = (points * 30) - 10;
    } else if(/line|Line/.test(dt)) {
      seriesGroup.frame().width = (points * 10);
    }
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
    return chartTypes[dt].generate(sArray,i,group);
}

function isText(layer) {
    return layer.isMemberOfClass(MSTextLayer);
}
