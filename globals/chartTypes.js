var chartTypes = {
    timeSeries : {
        name: 'Line Chart (Geometric Time Series)',
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
        reset: function() {
            this.prev = undefined;
        },
        chartable: true,
        generate: function(pointsArray) {
            var path = NSBezierPath.bezierPath();
            //initialize path
            var firstP = pointsArray[0];
            path.moveToPoint(NSMakePoint(0,firstP));
            //get rid of first point in series
            pointsArray.shift();

            pointsArray.forEach(function(d,i) {
              var x = (i + 1) * 10;
              path.lineToPoint(NSMakePoint(x,d));
            });

            var shape = MSShapeGroup.shapeWithBezierPath(path);
            var border = shape.style().borders().addNewStylePart();

            border.color = MSColor.colorWithSVGString("#3E6B9E");
            border.thickness = 2;

            group.addLayers([shape]);

            this.reset();
        }
    },
    barSeries : {
        name: 'Bar Chart (Random 1 - 100)',
        val: function() {
            return Math.random() * 100 + 1;
        },
        chartable: true,
        generate: function(va) {

            return makeBars(va);

            function makeBars(valueArray) {
                valueArray.forEach(makeRect);
            }

            function makeRect(d,i) {
                var rect = doc.currentPage().addLayerOfType('rectangle');
                rect = rect.embedInShapeGroup();
                rect.frame().x = i * 30;
                rect.frame().y = 100-d;
                rect.frame().width = 20;
                rect.frame().height = d;
                rect.setName('bar');
                var rectFill = rect.style().fills().addNewStylePart();
                rectFill.color = MSColor.colorWithSVGString("#3E6B9E");

            }
        }
    }
};

var dataKeys = Object.keys(chartTypes);
var dataNames = dataKeys.map(function(d) {
    return chartTypes[d].name;
});
