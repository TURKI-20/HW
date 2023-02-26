"use strict";
let __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });

const express_1 = __importDefault(require("express"));

const app = (0, express_1.default)();

const port = 3000;

const data = require('./data.json');

app.use(express_1.default.json());


//GET
app.get('/customer', (req, res) => {
    res.json(data);
});

//POST
app.post('/customer', (req, res) => {
    if (req.body.name === undefined || req.body.age === undefined) 
    {
        res.send('Enter a name & age!').end();
    }
    else {
        const name = req.body.name;
        const age = req.body.age;
        const obj = {
            name: name,
            age: age
        };
        data.push(obj);
        res.send(data);
    }
});

//PUT
app.put('/customer', (req, res) => {
    if (req.body.age === undefined) {
        res.send('please enter the new age');
    }
    else {
        data.find((e) => {
            if (e.name === req.body.name) {
                e.age = req.body.age;
            }
        });
        res.json(data);
    }
});



//Delete
app.delete('/customer/', (req, res) => {
    const name = req.body.name;
    res.json(data.filter((e) => e.name !== name));
});





app.listen(3000,()=>console.log("app is start!"));