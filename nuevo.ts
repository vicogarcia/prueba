class Persona {
  private nombre: string;
  private apellido: string;
  private añoNac: number;

  get Nombre(): string {
    return this.nombre;
  }

  set Nombre(nombre: string) {
    this.nombre = nombre;
  }

  get Apellido(): string {
    return this.apellido;
  }

  set Apellido(apellido: string) {
    this.apellido = apellido;
  }

  get AñoNac(): number {
    return this.añoNac;
  }

  set AñoNac(añoNac: number) {
    this.añoNac = añoNac;
  }

  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
