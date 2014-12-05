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
    stock : {
        name: 'Random Stocks',
        val: function() {
            var rand = Math.random() * stockNames.length;
            rand = Math.ceil(rand);
            return stockNames[rand-1];
        }
    }
};

var dataKeys = Object.keys(dataTypes);
var dataNames = dataKeys.map(function(d) {
    return dataTypes[d].name;
});
