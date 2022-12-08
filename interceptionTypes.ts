interface modelX {
  prop01: string;
}
interface modelY {
  prop02: string;
}
interface modelZ {
  prop03: string;
}

type model = modelX & modelY & modelZ;

const modelo: model = {
  prop01: "12",
  prop02: "22",
  prop03: "33",
};
