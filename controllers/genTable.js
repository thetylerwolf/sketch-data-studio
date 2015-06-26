@import '../functions/inputs.js'
@import '../globals/names.js'
@import '../globals/symbols.js'
@import '../globals/dataTypes.js'

var input, values,
    firstChoices, group, rows,
    cols, textLayer;

if(dt === 'fromCSV') {
    values = importFromCSV();
    if(values == false) return;
} else {
    //First input
    input = askForInput('Generate how many [ rows, columns ]?');
    if(!input) return;

    input = input.split(',');

    if(input.length <= 1) {
      input.push('');
    }

    rows = parseInt(input[0]) || 1;
    cols = parseInt(input[1]) || 1;

}
//If we're using artboards, add to the current artboard
if(doc.currentPage().artboards().count() > 0) {
  var currentArtboard = doc.currentPage().currentArtboard();
  group = currentArtboard.addLayerOfType('group');
} else {
  group = doc.currentPage().addLayerOfType('group');
}

group.setName('columns');

if(dt !== 'fromCSV') {

    for(i=cols; i>0; i--) {
        textLayer = group.addLayerOfType('text');
        genRows(rows, textLayer, i, dt);
    }

} else {

    for(i=0; i<cols; i++) {
        textLayer = group.addLayerOfType('text');
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
