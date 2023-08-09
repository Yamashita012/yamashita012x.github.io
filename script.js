var canvas = document.getElementById( 'canvas' )
var canvas_content = canvas.getContext( '2d' )
var canvas2 = document.getElementById( 'canvas2' )
var canvas_content_2 = canvas2.getContext( '2d' )

var wind_width = window.innerWidth
var wind_height = window.innerHeight

var character_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var maximum_Char_Count = 100
var falling_char_arr = []
var fontSize = 10
var maxColums = wind_width/(fontSize);


canvas.width = canvas2.width = wind_width;
canvas.height = canvas2.height = wind_height;


function randomInt( min, max ) {
    return Math.floor(Math.random() * ( max - min ) + min);
}

function randomFloat( min, max ) {
    return Math.random() * ( max - min ) + min;
}

function Point(x,y)
{
    this.x = x;
    this.y = y;
}

Point.prototype.draw = function(canvas_content){

    this.value = character_array[randomInt(0,character_array.length-1)].toUpperCase();
    this.speed = randomFloat(1,5);


    canvas_content_2.fillStyle = "rgba(255,255,255,0.8)";
    canvas_content_2.font = fontSize+"px san-serif";
    canvas_content_2.fillText(this.value,this.x,this.y);

    canvas_content.fillStyle = "#FF0000";
    canvas_content.font = fontSize+"px san-serif";
    canvas_content.fillText(this.value,this.x,this.y);



    this.y += this.speed;
    if(this.y > wind_height)
    {
        this.y = randomFloat(-100,0);
        this.speed = randomFloat(2,5);
    }
}

for(var i = 0; i < maxColums ; i++) {
    falling_char_arr.push(new Point(i*fontSize,randomFloat(-500,0)));
}


var update = function()
{

canvas_content.fillStyle = "rgba(0,0,0,0.05)";
canvas_content.fillRect(0,0,wind_width,wind_height);

canvas_content_2.clearRect(0,0,wind_width,wind_height);

    var i = falling_char_arr.length;

    while (i--) {
    falling_char_arr[i].draw(canvas_content);
    var v = falling_char_arr[i];
    }

    requestAnimationFrame(update);
}

update();
