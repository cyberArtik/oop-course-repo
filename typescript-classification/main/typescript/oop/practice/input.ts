// its for json library, allows to work with the filePaths on my proj 
import * as fs from 'fs';
import { Entities } from './Main';
// Don't forget about @types/node

class jsonInput {
    private filePath: string;
    private entities: Entities[] = [];

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

            if (Array.isArray(jsonObject)) {
                jsonObject.forEach((item) => {
                    const entity = new Entities(item.id, item.isHumanoid, item.planet, item.age, item.traits);
                    this.entities.push(entity); 
                });
                this.printEntities();
            } else {
                console.log("JSON is not an array.");
            }
        } catch (error) {
            console.error(`Error parsing JSON: ${error}`);
        }
    }

    private printEntities(): void {
        console.log("\nEntities (filtered by even IDs):");
        this.entities.filter(entity => entity.id % 2 === 0).forEach(entity => {
            console.log(entity.toString()); // Print only even ID entities
        });

        console.log("\nEntities (filtered by odd IDs):");
        this.entities.filter(entity => entity.id % 2 !== 0).forEach(entity => {
            console.log(entity.toString()); // Print only odd ID entities
        });
    }
}

// Working ts-node
let jsonReader = new jsonInput('../../../resources/input.json');
jsonReader.readFile();
