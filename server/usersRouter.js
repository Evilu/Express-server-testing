const express = require('express');
const DB = require('./db');
const usersRouter = express.Router();


const db = new DB();


usersRouter.get('/', async (req, res) => {
    const users = await db.getUsers();
    res.json(users);
});

usersRouter.post('/', async (req, res) => {
    const user = await db.createUser(req.body);
    res.json(user);
});


usersRouter.put('/:id', async (req, res) => {
    const update = await db.updateUser(req.body);
    res.json(update);
});

usersRouter.delete('/:id', async (req, res) => {
    const del = await db.deleteUser(req.params.id);
    res.json(del);
});



module.exports = usersRouter;