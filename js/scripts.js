function getTriangleArea(a, h) {
  var triangleArea = ((a > 0) && (h > 0) ? a * h / 2 : 'Nieprawidłowe dane')
  return triangleArea;
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(6, 9);
var triangle2Area = getTriangleArea(11, 25);
var triangle3Area = getTriangleArea(18, 5);

console.log(triangle1Area, triangle2Area, triangle3Area);