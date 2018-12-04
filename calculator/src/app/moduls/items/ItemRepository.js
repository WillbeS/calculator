import DefaultRepository from '../../../core/remote/kinvey/DefaultRepository';

class ItemRepository extends DefaultRepository {
    constructor() {
        super('items');
    }
}

export default ItemRepository;