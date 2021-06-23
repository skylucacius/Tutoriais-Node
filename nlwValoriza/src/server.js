"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
require("./database");
var app = express_1.default();
// app.get("/", (req,res) => res.send("Olá"))
app.listen(3000, function () { return console.log("iniciando aplicação na porta 3000 ..."); });
