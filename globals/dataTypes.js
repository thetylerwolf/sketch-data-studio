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
    }
};

var dataKeys = Object.keys(dataTypes);
var dataNames = dataKeys.map(function(d) {
    return dataTypes[d].name;
});
