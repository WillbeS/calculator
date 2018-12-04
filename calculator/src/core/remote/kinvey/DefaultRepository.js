import KinveyREST from '../../../core/remote/kinvey/KinveyREST';

class DefaultRepository {
    constructor(collection) {
        this.collection = collection;
        this.remote = new KinveyREST();
    }

    create(data) {
        return this.remote.post(this.collection, data);
    }

    edit(id, data) {
        return this.remote.update(this.collection + `/${id}`, data);
    }

    delete(id) {
        return this.remote.remove(this.collection + `/${id}`);
    }

    getAll() {
        return this.remote.get(this.collection);
    }

    getById(id) {
        return this.remote.get(this.collection + `/${id}`);
    }

    getAllBy(crieteria, value) {
        const query = `?query={"${crieteria}":"${value}"}`;
        return this.remote.get('appdata', this.collection + query, 'kinvey');
    }

    handleError(error) {
        return error.responseJSON.description;
    }
}

export default DefaultRepository;