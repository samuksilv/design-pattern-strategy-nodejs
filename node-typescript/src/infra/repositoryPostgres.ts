import IRepository from "../domain/interfaces/IRepository";

export default class RepositoryPostgres<Entity> implements IRepository<Entity> {
    create(item: Entity): Entity {
        throw new Error("Method not implemented.");
    }
    delete(id: String): void {
        throw new Error("Method not implemented.");
    }
    update(item: Entity, id: String): Entity {
        throw new Error("Method not implemented.");
    }
    read(): Entity[] {
        throw new Error("Method not implemented.");
    }
    find(id: string): Entity {
        throw new Error("Method not implemented.");
    }
}
