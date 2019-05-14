//boolean
var isCool = true;
//number
var age = 56;
//string
var eyeColor = 'brown';
var favouriteQuote = "I'm not old, I'm only " + age;
// Array
var pets = ['cat', 'dog'];
var pets2 = ['lion', 'dragon'];
// Object
var wizard = {
    a: 'John'
};
// null and undefined
var meg = undefined;
var nooo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
// Any - !!!!!!!! BE CAREFUL
var whatever = 'adasdsadasdassadsad';
whatever = 985;
// void
var sing = function () {
    console.log('sing sing sing');
};
// never
var error = function () {
    throw Error('error');
};
// type RobotArmy {
//   count: number,
//   type: string,
//   magic: string
// }
var fightLannisterArmy = function (soldiers) {
    console.log('Fight');
};
fightLannisterArmy({ count: 1, type: 'dragon' });
var dog = {};
dog.count;
// Function
var fightLannisterArmy2 = function (soldiers) {
    console.log('Fight');
};
var fightLannisterArmy3 = function (soldiers) {
    console.log('Fight');
    return 5;
};
// Class, Classes
var Dragon = /** @class */ (function () {
    function Dragon(sound) {
        this.roar = 'roar';
        this.roar = sound;
    }
    Dragon.prototype.great = function () {
        return "Hello " + this.roar;
    };
    return Dragon;
}());
var dragon = new Dragon('spit fire');
console.log(dragon.great());
//dragon.roar  - cannot reach because its private, default is public
