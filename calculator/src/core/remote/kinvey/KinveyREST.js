import $ from 'jquery';
import storage from '../../storage/LocalStorage';

const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_HkP4NlRrZ'; // APP KEY HERE
const APP_SECRET = 'fba899760e4443ff9f2990173d9a9501'; // APP SECRET HERE

class KinveyREST {
    constructor(module = 'appdata', authType = 'Kinvey') {   
        this.module = module;
        this.setAuthType(authType);
        this.auth = this.getAuth();
    } 

    setAuthType(authType) {
        this.authType = authType;
        this.auth = this.getAuth();
    }

    getAuth(auth) {
        const token = storage.getToken();

        if(this.authType === 'Kinvey') {
            return `Kinvey ${token}`
        } else {
            return `Basic ${btoa(APP_KEY + ":" + APP_SECRET)}`;
        }
    }

    makeRequest(method, endpoint) {
        return {
            url: BASE_URL + this.module + '/' + APP_KEY + '/' + endpoint,
            method: method,
            headers: {
                'Authorization': this.auth,
                'Content-Type': 'application/json'
            }
        }
    }

    get(url) {
        return $.ajax(this.makeRequest('GET', url));
    }

    post(url, data) {
        let obj = this.makeRequest('POST', url);
        if (data) {
            obj.data = JSON.stringify(data);
        }

        return $.ajax(obj);
    }

    update(url, data) {
        let obj = this.makeRequest('PUT', url);
        obj.data = JSON.stringify(data);
        return $.ajax(obj);
    }

    remove(url) {
        return $.ajax(this.makeRequest('DELETE', url));
    }

    static handleError(error) {
        return error.responseJSON.description;
    }
}

export default KinveyREST;