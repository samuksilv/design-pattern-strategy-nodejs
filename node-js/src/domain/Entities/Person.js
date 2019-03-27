import {Entity} from './entity';

class Person extends Entity{
    constructor(id, name){
        super(id);
        this.name= name;
    }
}

export default Person;