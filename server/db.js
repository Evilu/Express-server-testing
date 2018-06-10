const fs = require('fs');

class DB {

    constructor() {
        this.data = this.readFromJson();
    }

    readFromJson() {
        const data = fs.readFileSync(__dirname + '/data.json');
        return JSON.parse(data);
    }

    writeToJson() {
        fs.writeFileSync(__dirname + '/data.json', JSON.stringify(this.data));
    }

    getUsers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data.users);
            }, 500);
        });
    }

    createUser(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                user.id = this.data.users[this.data.users.length - 1].id + 1;
                this.data.users.push(user);
                this.writeToJson();
                resolve(user);
            }, 500);
        });
    }

    deleteUser(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.data = this.data.filter(u => u.id !== user.id);
                this.writeToJson();
                resolve(true);
            }, 500);
        });
    }

    updateUser(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const userIndex = this.data.users.findIndex(u => u.id === user.id);
                this.data.users[userIndex] = user;
                this.writeToJson();
                resolve(true);
            }, 500);
        });
    }

    // changeUsername(user) {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             user.id = this.data.users[this.data.users.length - 1].id + 1;
    //
    //             this.data.users.push(user);
    //             this.writeToJson();
    //             resolve(user);
    //         }, 500);
    //     });
    // }


}

module.exports = DB;