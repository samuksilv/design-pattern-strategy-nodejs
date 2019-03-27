import Entity from "./entity";

export default class Pessoa extends Entity {
    name: string;
    constructor(name: string) {
        super();
        this.name = name;
    }
}
