enum Country {
  Peru = "Perú",
  Chile = "Chile",
  Argentina = "Argentina",
}

const peru = "Perú";
if (peru === Country.Peru) {
  //LOGICA
}

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}
