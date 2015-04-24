function askForInput(prompt) {
  return [doc askForUserInput:prompt initialValue:""];
}

function createSelect(msg, items, selectedItemIndex){
  selectedItemIndex = selectedItemIndex || 0;

  var accessory = [[NSComboBox alloc] initWithFrame:NSMakeRect(0,0,200,25)]
  [accessory addItemsWithObjectValues:items]
  [accessory selectItemAtIndex:selectedItemIndex]

  var alert = [[NSAlert alloc] init]
  [alert setMessageText:msg]
  [alert addButtonWithTitle:'OK']
  [alert setAccessoryView:accessory]

  var responseCode = [alert runModal]
  var sel = [accessory indexOfSelectedItem]

  return [responseCode, sel]
}

function showSelect(dialog, items) {
    var dropdownOptions = [];

    if(items.length > 0) {
      dropdownOptions = items;
    } else {
      log(items)
      var loop = [items objectEnumerator];
      while (item = loop.nextObject()) {
          dropdownOptions.push(item.name());
      }
    }

    return createSelect(dialog,dropdownOptions, 0)[1];
}
