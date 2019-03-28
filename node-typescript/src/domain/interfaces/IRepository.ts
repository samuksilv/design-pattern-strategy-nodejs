import Entity from "../entities/entity";

export default interface IRepository<T extends Entity> {

create(item: T): T;
    delete(id: String): void;
    update(item: T, id: String): T;
    read(): T[];    
    find(id: string): T;
}



