import Entity from "./entity";

export default class Person extends Entity {
    name: string;
    constructor(name: string) {
        super();
        this.name = name;
    }
}
