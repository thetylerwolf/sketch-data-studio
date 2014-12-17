var chartTypes = {
    timeSeries : {
        name: 'Geometric Time Series',
        val: function() {
            //Brownian time series for realism
            var direction = this.direction || Math.random() * 3 + -8;
            var prev = this.prev || Math.random() * 100;
            var rand = Math.random() * 10 + direction;
            var mean = 5;
            var vol = 5;
            var dt = 1;

            var result = (mean * dt) + (vol * rand * dt);
            this.prev = result + prev;

            return this.prev.toFixed(2);
        },
        chartable: true
    }
};

var dataKeys = Object.keys(chartTypes);
var dataNames = dataKeys.map(function(d) {
    return chartTypes[d].name;
});
