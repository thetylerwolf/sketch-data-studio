function askForInput(title, type, dt) {
  var alert = [COSAlertWindow new];
        [alert setMessageText: title];

  var optionsView = [[NSView alloc] initWithFrame: NSMakeRect(0, 0, 300, 85)];
  [alert addAccessoryView: optionsView];

  var numItemsText = 'Number of ' + (type == 'charts' ? 'charts' : 'columns');
  var numLabel = addLabel(numItemsText, NSMakeRect(0, 65, 200, 20));
  [optionsView addSubview: numLabel];

  var numInput = addInput(1, NSMakeRect(130, 65, 50, 20));
  [optionsView addSubview: numInput];

  var numPointsText = 'Number of ' + (type == 'charts' ? 'points' : 'rows');
  var pointsLabel = addLabel(numPointsText, NSMakeRect(0, 35, 200, 20));
  [optionsView addSubview: pointsLabel];

  var pointsInput = addInput(10, NSMakeRect(130, 35, 50, 20));
  [optionsView addSubview: pointsInput];

  // add bottom buttons
  [alert addButtonWithTitle:"Generate"];
  [alert addButtonWithTitle:"Cancel"];

  var arbitraryInput;

  log(dt);
  if(dt == 'arbitrary') {
    var arbitraryText = 'Arbitrary values';
    var arbitraryLabel = addLabel(arbitraryText, NSMakeRect(0,5, 150, 20));
    [optionsView addSubview: arbitraryLabel];

    arbitraryInput = addInput('', NSMakeRect(130,5,150,20));
    [optionsView addSubview: arbitraryInput];
  }
  
  var input = [alert runModal];

  return {
    items: numInput,
    points: pointsInput,
    arb: arbitraryInput,
    result: input
  };

  function addLabel(optionValue, frame) {

    var label = [[NSTextField alloc] initWithFrame: frame];
    [label setStringValue: optionValue];
    [label setBezeled:false];
    [label setDrawsBackground:false];
    [label setEditable:false];
    [label setSelectable:false];

    return label;
  }

  function addInput(defaultValue, frame) {

    var input = [[NSTextField alloc] initWithFrame: frame];
    [input setStringValue: defaultValue];
    [input setBezeled:true];
    [input setDrawsBackground:true];
    [input setEditable:true];
    [input setSelectable:true];

    return input;
  }
}
