
// Objetos

type Car = {
    carroceria:string,
    modelo: string,
    antibalas: boolean,
    pasajeros: number,
    disparar?: () => void
}

const batimovil:Car = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };
  
  const bumblebee:Car = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };
  

  type Villain = {
    nombre: string,
    edad?: number,
    mutante: boolean
  }
  
  // Villanos debe de ser un arreglo de objetos personalizados
  const villanos:Villain[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];
  
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  
  type Xmen = {
    poder: string,
    estatura: number
  }

  const charles:Xmen = {
    poder:"psiquico",
    estatura: 1.78
  };

  type XmenVillain = {
    lider: boolean,
    miembros: string[]
  }
  
  const apocalipsis:XmenVillain = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }

  console.log(apocalipsis)
  
  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: (Xmen|XmenVillain);
  
  mystique = charles;
  mystique = apocalipsis;
  