@import '../globals/chartColors.js'

var chartTypes = {
    lineSeries : {
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

            return -this.prev.toFixed(2);
        },
        reset: function() {
            this.prev = undefined;
        },
        chartable: true,
        generate: function(pointsArray, index, group) {
            var avgPoint = pointsArray.reduce(function(a,b) {
                return a + b
              },0);

            var base = Math.max.apply(Math, pointsArray);
            var path = NSBezierPath.bezierPath();

            //initialize path
            var firstP = pointsArray[0];

            path.moveToPoint(NSMakePoint(0, base - firstP));

            //get rid of first point in series
            pointsArray.shift();

            var x;
            pointsArray.forEach(function(d,i) {
              x = (i + 1) * 10;
              path.lineToPoint(NSMakePoint(x, base - d));
            });

            var shape = MSShapeGroup.shapeWithBezierPath(path);

            var border = shape.style().addStylePartOfType(1);

            var idx = index % chartColors.length;
            var iColor = chartColors[idx];
            border.color = MSImmutableColor.colorWithSVGString(iColor);
            border.thickness = 2;

            group.addLayers([shape]);

            this.reset();
        }
    },
    barSeries : {
        name: 'Bar Chart (Random 1 - 100)',
        val: function() {
            var rand = Math.random() * 100 + 1;
            return rand.toFixed(2);
        },
        chartable: true,
        generate: function(va,index, group) {
            var base = Math.max.apply(Math, va);
            var height, width, x, y;
                height = width = x = y = 0;

            va.forEach(function(d,i) {
                var rect = MSRectangleShape.alloc().init();

                width = 20;
                x = i * 30;

                if(d < 0) {
                    y = base;
                    height = -d;

                } else {
                    // Not sure why, but base goes to 0 when d == 0
                    y = base - (d || 1);
                    height = d || 1;
                }

                rect.frame = MSRect.rectWithRect(NSMakeRect(x,y,width,height));

                rect = MSShapeGroup.shapeWithPath(rect);

                rect.setName('bar');

                var rectFill = rect.style().addStylePartOfType(0);

                var idx = index % chartColors.length;
                var iColor = chartColors[idx];
                rectFill.color = MSImmutableColor.colorWithSVGString(iColor);

                rect.frame().constrainProportions = false;

                width = rect.frame().x + rect.frame().width;
                height = Math.max(rect.frame().height, height);
                group.addLayers([rect])
            });

            return {
                w: width,
                h: height,
                x: x,
                y: base
            }

        }
    }
};
