@import '../functions/inputs.js';
@import '../globals/names.js';
@import '../globals/symbols.js';
@import '../globals/dataTypes.js';

var input, values,
    firstChoices, group, rows,
    cols, textLayer;

if(dt == 'fromCSV') {
    values = importFromCSV();
    if(values == false) return;
} else {
    //First input
    input = askForInput(dataTypes[dt].name, 'tables', dt);
    if(input.result == 1001) return;

    rows = Math.abs(input.points.intValue()) || 1;
    cols = Math.abs(input.items.intValue()) || 1;

    if(dt == 'arbitrary') {
        var arbValues = input.arb.stringValue()
        arbValues = arbValues.split(',');
        values = arbValues.map(function(d) { return d.trim(); });
    }

}
//If we're using artboards, add to the current artboard
group = [MSLayerGroup new];

//If we're using artboards, add to the current artboard
if(doc.currentPage().artboards().count() > 0) {
  var currentArtboard = doc.currentPage().currentArtboard();
  // group = currentArtboard.addLayerOfType('group');

  currentArtboard.addLayers([group]);
} else {
  doc.currentPage().addLayers([group]);
}

group.setName('columns');

if(dt !== 'fromCSV') {

    for(i=cols; i>0; i--) {
        textLayer = [MSTextLayer new];
        group.addLayers([textLayer]);
        genRows(rows, textLayer, i, dt);
    }

} else {

    for(i=0; i<cols; i++) {
        textLayer = [MSTextLayer new];
        group.addLayers([textLayer]);
        resultStr = values[i].join('\n');
        textLayer.setStringValue(resultStr);
        textLayer.adjustFrameToFit();
        placeLayer(textLayer, i);
    }

}

return;

function genRows(numCols, layer, index, dt) {
    var result = [],
        num;

    for(var i = numCols; i>0; i--) {
        num = dataTypes[dt].val(index, values);
        result.push(num);
    }

    resultStr = result.join('\n');
    layer.setStringValue(resultStr);
    layer.adjustFrameToFit();
    placeLayer(layer, index);
}

function placeLayer(layer, index) {
    layer.frame().setX(index * 100);
    refreshTextLayer(layer);
}

function isText(layer) {
    return layer.isMemberOfClass(MSTextLayer);
}

function importFromCSV() {
    var path = dataTypes[dt].prompt();
    if(!path) return false;

    //get root dir
    // var rootDir = [path stringByDeletingLastPathComponent];
    // if(!Sandbox.authoriseDir(rootDir)) return;

    var contents = dataTypes[dt].load(path);

    var data = dataTypes[dt].transform(contents);
    cols = data.length;

    return data;
}

// Taken from Sketch Data Populator - Thanks!
// https://github.com/preciousforever/sketch-data-populator
function refreshTextLayer(layer) {
    [layer select: true byExpandingSelection: false];
    [layer setIsEditingText: true];
    [layer setIsEditingText: false];
    [layer select: false byExpandingSelection: false];
}