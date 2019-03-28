
class IRepository {
    async create(item){
        throw new Error("Not implemented exception");
    }

    async  delete(id){
        throw new Error("Not implemented exception");
    }

    async update(item, id){
        throw new Error("Not implemented exception");
    }

    async  read(){
        throw new Error("Not implemented exception");
    }

    async find(id){
        throw new Error("Not implemented exception");
    }
}

module.exports= IRepository;

