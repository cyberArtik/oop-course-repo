export class Entities{
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