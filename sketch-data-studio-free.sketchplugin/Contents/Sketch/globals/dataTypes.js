var dataTypes = {
    zeroToOne : {
        name: 'Random 0 - 1',
        val: function() {
            var rand = Math.random();
            rand = rand.toFixed(2).toString();
            return rand;
        }
    },
    zeroToHundred : {
        name: 'Random 0 - 100',
        val: function() {
            var rand = Math.random() * 100;
            rand = rand.toFixed(2).toString();
            return rand;
        }
    },
    arbitrary : {
        name: 'Set your own random values',
        val: function(index, values) {
            var pickNum = values.length;
            var rand = Math.random() * values.length;
            rand = Math.floor(rand);
            return values[rand];
        }
    },
    stock : {
        name: 'Random Stocks',
        val: function() {
            var rand = Math.random() * stockNames.length;
            rand = Math.ceil(rand);
            return stockNames[rand-1];
        }
    },
    bond : {
        name: 'Random Bonds',
        val: function() {
            var rand = Math.random() * stockNames.length;
            rand = Math.ceil(rand);
            var years = Math.random() * 10;
            years = Math.ceil(years);
            return stockNames[rand-1] + ' ' + years + 'YR';
        }
    },
    symbol : {
        name: 'Random Stock Symbols',
        val: function() {
            var rand = Math.random() * stockSymbols.length;
            rand = Math.ceil(rand);
            return stockSymbols[rand-1];
        }
    },
    fromCSV : {
        name: 'Generate from CSV',
        prompt: function() {
            var panel = [NSOpenPanel openPanel];

            [panel setTitle: "Select File"];
            [panel setMessage: "Select the CSV file to use"];
            [panel setPrompt: "Choose"];

            [panel setCanCreateDirectories: false];
            [panel setCanChooseFiles: true];
            [panel setCanChooseDirectories: false];
            [panel setAllowsMultipleSelection: false];
            [panel setShowsHiddenFiles: false];
            [panel setExtensionHidden: false];

            var fileTypes = ['csv', 'CSV'];
            [panel setAllowedFileTypes:fileTypes];

            var pressedButton = [panel runModal];
            if(pressedButton == NSOKButton) {
                return [[panel URL] path];
            } else {
                return false;
            }
        },
        load: function(path) {
            var contents = [NSString stringWithContentsOfFile: path encoding: NSUTF8StringEncoding error: false];

            return contents;
        },
        transform: function(content) {
            content = content.replace(/\n\r/g,'\n');
            content = content.replace(/\r\n/g,'\n');
            content = content.replace(/\r/g,'\n');
            var data = content.split('\n');

            // data = data.map(function(d) { return d.split(','); });

            data = data.map(function(d) {
                var exp = new RegExp('["|""]','g');
                var string = d.replace(exp,',');
                string = string.split(',');
                return string;
            });

            data = data[0].map(function(d,i) {
                return data.map(function(j) {
                    return j[i];
                });
            });

            return data;
        }
    }
};
