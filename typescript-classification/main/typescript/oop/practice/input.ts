// its for json library, allows to work with the filePaths on my proj 
import * as fs from 'fs';
// Don't forget about @types/node



class Entities {
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

class JsonInput {
    private filePath: string;
    private entities: Entities[] = [];
    private universes: {
        [key: string]: Entities[];
    } = {
            'Star Wars': [],
            'Marvel': [],
            'Hitchhiker\'s Guide': [],
            'Lord of the Rings': []
        };

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    readFile(): void {
        try {
            let data = fs.readFileSync(this.filePath, 'utf8');
            console.log("File contents:\n", data);
            this.parseJson(data);
        } catch (err) {
            console.error(`Error reading file: ${err}`);
        }
    }

    private parseJson(data: string): void {
        try {
            let jsonObject = JSON.parse(data);
            console.log("Parsed JSON Object:\n", jsonObject);

            if (Array.isArray(jsonObject.data)) {
                jsonObject.data.forEach((item: { id: number; isHumanoid?: boolean; planet?: string; age?: number; traits?: string[]; }) => {
                    const entity = new Entities(item.id, item.isHumanoid, item.planet, item.age, item.traits);
                    this.entities.push(entity);
                });
                this.classifyEntities();
                this.printEntities();
            } else {
                console.log("JSON data is not an array.");
            }
        } catch (error) {
            console.error(`Error parsing JSON: ${error}`);
        }
    }

    private classifyEntities(): void {
        this.entities.forEach(entity => {
            if (entity.isHumanoid) {
                if (entity.planet === 'Asgard' && (entity.age === undefined || entity.age <= 5000)) {
                    this.universes['Marvel'].push(entity);
                } else if (entity.planet === 'Betelgeuse' && entity.age !== undefined && entity.age <= 100) {
                    this.universes['Hitchhiker\'s Guide'].push(entity);
                } else if (entity.planet === 'Earth' && (entity.age === undefined || entity.age <= 200)) {
                    if (entity.traits?.includes('BLONDE') && entity.traits?.includes('POINTY_EARS')) {
                        this.universes['Lord of the Rings'].push(entity); 
                    } else if (entity.traits?.includes('SHORT') && entity.traits?.includes('BULKY')) {
                        this.universes['Lord of the Rings'].push(entity);
                    }
                }
            } else {
                if (entity.planet === 'Kashyyyk' && (entity.age === undefined || (entity.age >= 0 && entity.age <= 400))) {
                    this.universes['Star Wars'].push(entity); 
                } else if (entity.planet === 'Endor' && (entity.age === undefined || (entity.age >= 0 && entity.age <= 60))) {
                    this.universes['Star Wars'].push(entity);
                } else if (entity.planet === 'Vogsphere' && (entity.age === undefined || (entity.age >= 0 && entity.age <= 200))) {
                    this.universes['Hitchhiker\'s Guide'].push(entity);
                }
            }
        });
    }

    private printEntities(): void {
        for (const [universe, entities] of Object.entries(this.universes)) {
            console.log(`\nEntities in ${universe}:`);
            entities.forEach(entity => {
                console.log(entity.toString());
            });
        }
    }
}

// Working ts-node
let jsonReader = new JsonInput('../../../resources/input.json');
jsonReader.readFile();
