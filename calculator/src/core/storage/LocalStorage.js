class LocalStorage {
    static removeUser() {
        window.localStorage.removeItem('user');
    }

    static authenticateUser(token) {
        window.localStorage.setItem('token', token);
    }

    static isUserAuthenticated() {
        return window.localStorage.getItem('token') !== null;
    }

    static deauthenticateUser() {
        window.localStorage.removeItem('token');
    }

    static getToken() {
        return window.localStorage.getItem('token');
    }
}

export default LocalStorage;