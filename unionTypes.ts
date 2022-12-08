interface modelX {
  prop01: string;
}
interface modelY {
  prop02: string;
}
interface modelZ {
  prop03: string;
}

type model = modelX | modelY | modelZ;

const modelo: model = {
  prop02: "02",
  prop01: "01",
  prop03: "03",
};
