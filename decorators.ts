/** DECORATORS EN FUNCIONES **/
class Robot {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  @logFunction
  talk() {
    console.log(`Hola, mi nombre es ${this.name}`);
  }
}

function logFunction(target, key) {
  console.log(`El metodo ${key} de la clase ${target} se acaba de ejecutar.`);
}

/** DECORATORS EN CLASES **/
function Component(target) {
  return class extends target {
    public message = "Ipsum laboris in dolor sunt sit voluptate.";
    printMessage() {
      super.printMessage();
      console.log(this.message);
    }
  };
}

@Component
class Alerta {
  constructor() {}
  printMessage() {}
}

const alerta = new Alerta();
alerta.printMessage();
