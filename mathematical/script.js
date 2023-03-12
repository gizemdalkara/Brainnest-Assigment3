function diagonal(s)
{
    return Math.sqrt(2) * s;
}
console.log(diagonal(9));

var x = 5;
var y = 6;
var z = 7;
var t = (x+y+z)/2;
var result = Math.sqrt(t*((t-x)*(t-y)*(t-z)));
console.log(result);

function area(r){
    let area = 3.14*r*r;
    return area;
}
console.log(area(4));