import KinveyREST from './KinveyREST';

class KinveyUserREST {
    constructor() {
        this.kinveyREST = new KinveyREST('user');
    }

    register(data) {
        this.kinveyREST.setAuthType('Basic');
        return this.kinveyREST.post('', data);
    }

    login(data) {
        this.kinveyREST.setAuthType('Basic');
        return this.kinveyREST.post('login', data);
    }

    logout() {
        this.kinveyREST.setAuthType('Kinvey');
        return this.kinveyREST.post('_logout');
    }

    handleError(error) {
        return error.responseJSON.description;
    }
}

export default KinveyUserREST;