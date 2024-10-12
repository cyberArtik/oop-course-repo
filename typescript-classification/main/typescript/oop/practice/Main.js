var Entities = /** @class */ (function () {
    function Entities(id, isHumanoid, planet, age, traits) {
        this.id = id;
        this.isHumanoid = isHumanoid;
        this.planet = planet;
        this.age = age;
        this.traits = traits;
    }
    Entities.prototype.toString = function () {
        return "Entity ".concat(this.id, " from ").concat(this.planet, ", Humanoid: ").concat(this.isHumanoid, ", Age: ").concat(this.age, ", Traits: ").concat(this.traits.join(", "));
    };
    return Entities;
}());
// just setting the workspace and trying some class manipulation not on json but on manual trials
var entity1 = new Entities(1, true, "Asgard", 82, ["BULKY", "EXTRA_HEAD"]);
var entity2 = new Entities(2, false, "Endor", 253, ["HAIRY", "TALL"]);
console.log(entity1.toString());
console.log(entity2.toString());
