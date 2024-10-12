class Entities{
  id: number;
  isHumanoid: boolean;
  planet: string;
  age: number;
  traits: string[];

  constructor(id: number, isHumanoid: boolean, planet: string, age: number, traits: string[]){
    this.id = id;
    this.isHumanoid = isHumanoid;
    this.planet = planet;
    this.age = age;
    this.traits = traits;
  }
  toString(): string {
    return `Entity ${this.id} from ${this.planet}, Humanoid: ${this.isHumanoid}, Age: ${this.age}, Traits: ${this.traits.join(", ")}`;
}
}


// just setting the workspace and trying some class manipulation not on json but on manual trials

let entity1 = new Entities(1, true, "Asgard", 82, ["BULKY", "EXTRA_HEAD"]);
let entity2 = new Entities(2, false, "Endor", 253, ["HAIRY", "TALL"]);

console.log(entity1.toString());
console.log(entity2.toString());