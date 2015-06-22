@import '../functions/inputs.js'
@import '../globals/names.js'
@import '../globals/symbols.js'
@import '../globals/dataTypes.js'

var input, values,
    firstChoices, group, rows,
    cols, textLayer;

//First input
input = askForInput('Generate how many [ rows, columns ]?');

input = input.split(',');

if(input.length <= 1) {
  input.push('');
}

rows = parseInt(input[0]) || 1;
cols = parseInt(input[1]) || 1;

//If we're using artboards, add to the current artboard
if(doc.currentPage().artboards().count() > 0) {
  var currentArtboard = doc.currentPage().currentArtboard();
  group = currentArtboard.addLayerOfType('group');
} else {
  group = doc.currentPage().addLayerOfType('group');
}

group.setName('columns');

for(i=cols; i>0; i--) {
    textLayer = group.addLayerOfType('text');
    genRows(rows, textLayer, i, dt);
}

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
}

function isText(layer) {
    return layer.isMemberOfClass(MSTextLayer);
}
