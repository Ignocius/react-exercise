//boolean
let isCool: boolean = true;

//number
let age: number = 56;

//string
let eyeColor: string = 'brown';
let favouriteQuote: string = `I'm not old, I'm only ${age}`;

// Array
let pets: string[] = ['cat', 'dog'];
let pets2: Array<string> = ['lion', 'dragon'];

// Object
let wizard: object = {
  a: 'John'
}

// null and undefined
let meg: undefined = undefined;
let nooo: null = null;


// Tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size { Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2]

// Any - !!!!!!!! BE CAREFUL
let whatever: any = 'adasdsadasdassadsad';
whatever = 985;

// void
let sing = (): void => {
  console.log('sing sing sing');
}

// never
let error = (): never => {
  throw Error('error');
}

// interface
interface LannisterArmy {
  count: number,
  type: string,
  magic?: string /*optional property*/
}

// type RobotArmy {
//   count: number,
//   type: string,
//   magic: string
// }

let fightLannisterArmy = (soldiers: LannisterArmy) => {
  console.log('Fight')
}

fightLannisterArmy({count:1 , type: 'dragon'})

// Type Assertion
interface CatArmy {
  count: number,
  type: string,
  magic: string
}

let dog = {} as CatArmy
dog.count

// Function
let fightLannisterArmy2 = (soldiers: LannisterArmy): void => {
  console.log('Fight')
}

let fightLannisterArmy3 = (soldiers: LannisterArmy): number => {
  console.log('Fight')
  return 5
}

// Class, Classes
class Dragon {
  private roar: string = 'roar'
  constructor(sound: string) {
    this.roar = sound;
  }

  great() {
    return `Hello ${this.roar}`
  }
}

let dragon = new Dragon('spit fire');
console.log(dragon.great())
//dragon.roar  - cannot reach because its private, default is public

// Union
let confused: string | number = "helklo";
confused = 5
confused = false // fail
