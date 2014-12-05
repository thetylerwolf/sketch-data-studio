var dataTypes = {
    zeroToOne : {
        name: '0 - 1 Random',
        val: function() {
            var rand = Math.random();
            rand = rand.toFixed(2).toString();
            return rand;
        }
    },
    zeroToHundred : {
        name: '0 - 100 Random',
        val: function() {
            var rand = Math.random() * 100;
            rand = rand.toFixed(2).toString();
            return rand;
        }
    }
};

var dataKeys = Object.keys(dataTypes);
var dataNames = dataKeys.map(function(d) {
    return dataTypes[d].name;
});
