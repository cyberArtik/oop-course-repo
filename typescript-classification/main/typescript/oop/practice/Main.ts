export class Entities {
  id: number;
  isHumanoid?: boolean;
  planet?: string;     
  age?: number;         
  traits: string[];     

  constructor(id: number, isHumanoid?: boolean, planet?: string, age?: number, traits: string[] = []) {
      this.id = id;
      this.isHumanoid = isHumanoid;
      this.planet = planet;
      this.age = age;
      this.traits = traits;
  }

  toString(): string {
      return `Entity - ID: ${this.id}, Humanoid: ${this.isHumanoid}, Planet: ${this.planet}, Age: ${this.age}, Traits: ${this.traits.join(', ')}`;
  }
}
