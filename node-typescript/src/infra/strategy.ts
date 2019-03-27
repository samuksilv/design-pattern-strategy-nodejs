import IRepository from "../domain/interfaces/IRepository";

export default class ContextStrategy<Entity> implements IRepository<Entity>{

    private _repository: IRepository<Entity>;

    constructor(strategy: IRepository<Entity>) {
        this._repository = strategy;
    }

    create(item: Entity): Entity {
        return this._repository.create(item);
    }

    delete(id: String): void {
        return this._repository.delete(id);
    }

    update(item: Entity, id: String): Entity {
        return this._repository.update(item, id);
    }

    read(): Entity[] {
        return this._repository.read();
    }

    find(id: string): Entity {
        return this._repository.find(id);
    }
}