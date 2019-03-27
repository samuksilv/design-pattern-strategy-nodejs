const IRepository = require("../domain/baseClass/Repository");

class ContextStrategy extends IRepository{

    constructor(strategy){
        super();
        return this.repository = strategy;
    }

    async create(item){
        return await this.repository.create(item);
    }

    async update(item, id){
        return await this.repository.update(item, id);
    }

    async delete( id){
        return await this.repository.delete( id);
    }

    async read( ){
        return await this.repository.read( );
    }

    async find( id){
        return await this.repository.find( id);
    }    
}

module.exports = ContextStrategy;