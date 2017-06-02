function getTriangleArea(a, h) {
    console.log((a > 0) && (h > 0) ? a * h / 2 : 'Nieprawidłowe dane')

    /*if ( (a > 0) && (h > 0) ) {
      console.log(getTriangleArea);
    }  else {
      console.log('Nieprawidłowe dane');
    }*/

    return;
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(6, 9);
var triangle2Area = getTriangleArea(11, 25);
var triangle3Area = getTriangleArea(18, 5);