// Dots and lines

$(function(){

    var header = $('.site-header'),
        canvas = $('<canvas></canvas>').appendTo(header)[0],

        ctx    = canvas.getContext('2d'),
        color  = 'black',
        idle   = null, mousePosition;

    canvas.width         = window.innerWidth;
    canvas.height        = header.outerHeight();
    canvas.style.display = 'block';

    ctx.fillStyle = color;
    ctx.lineWidth = .1;
    ctx.strokeStyle = color;

    var mousePosition = { x: 30 * canvas.width / 100, y: 30 * canvas.height / 100 },
        dots          = { nb: (canvas.width < 640 ? 35 : 150), distance: 80, d_radius: 150, array: [] };

    function Dot(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();

        this.radius = Math.random();
    }

    Dot.prototype = {
        create: function(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        },

        animate: function(){

            for(var i = 0, dot=false; i < dots.nb; i++){

                dot = dots.array[i];

                if(dot.y < 0 || dot.y > canvas.height){
                    dot.vx = dot.vx;
                    dot.vy = - dot.vy;
                }else if(dot.x < 0 || dot.x > canvas.width){
                    dot.vx = - dot.vx;
                    dot.vy = dot.vy;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        },

        line: function(){
            for(var i = 0; i < dots.nb; i++){
                for(var j = 0; j < dots.nb; j++){
                    i_dot = dots.array[i];
                    j_dot = dots.array[j];

                    if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
                        if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                            ctx.beginPath();
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        }
    };

    function createDots(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(var i = 0; i < dots.nb; i++){
            dots.array.push(new Dot());
            dot = dots.array[i];

            dot.create();
        }

        dot.line();
        dot.animate();
    }

    idle = setInterval(createDots, 1000/30);

    $(canvas).on('mousemove mouseleave', function(e){
        if(e.type == 'mousemove'){
            mousePosition.x = e.pageX;
            mousePosition.y = e.pageY;
        }
        if(e.type == 'mouseleave'){
            mousePosition.x = canvas.width / 2;
            mousePosition.y = canvas.height / 2;
        }
    });
});
