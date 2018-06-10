export class Api {
    static baseUrl = 'http://localhost:4000';

    static getUsers() {
        return this.get('/users');
    }

    static createUser(user) {
        return this.post('/users', user);
    }
    static deleteUser(user) {
        return this.del('/users', user);
    }

    static updateUser(user) {
        return this.put('/users', user);
    }

    static get(url) {
        return fetch(this.baseUrl + url)
            .then(res => res.json()); // ?=> json
    }

    static post(url, body) {
        return fetch(this.baseUrl + url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    }
    static del(url, body) {
        return fetch(this.baseUrl + url, {
            method: 'DELETE',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    }

    static put (url, body) {
        return fetch(this.baseUrl + url, {
            method: 'UPDATE',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    }
}


