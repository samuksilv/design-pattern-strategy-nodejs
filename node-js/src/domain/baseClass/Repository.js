
class IRepository {
    async create(item){
        return new Error("Not implemented exception");
    }

    async  delete(id){
        return new Error("Not implemented exception");
    }

    async update(item, id){
        return new Error("Not implemented exception");
    }

    async  read(){
        return new Error("Not implemented exception");
    }

    async find(id){
        return new Error("Not implemented exception");
    }
}

module.exports= IRepository;

