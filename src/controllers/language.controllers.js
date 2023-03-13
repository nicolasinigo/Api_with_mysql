import e from "express";
import { getConnection } from "./../database/database"

// metodo para ver todos los leguajes en la base de datos 
const getLenguages = async (req, res) => {
    try {
        const connection = await getConnection()
        const result = await connection.query("SELECT  id, name, programmers FROM language")
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);

    }
};


// metodo para mostrar un solo lenguaje
const getLenguage = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await getConnection()
        const result = await connection.query("SELECT  id, name, programmers FROM language WHERE id = ?", id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);

    }
};


// metodo para agregar un nuevo lenguaje 
const addLenguages = async (req, res) => {
    try {
        const { name, programmers } = req.body;
        if (name == undefined || programmers == undefined) {
            res.status(400).json({ message: "bad request. Please fill all fields" })
        } else {
            const language = {
                name, programmers
            }
            const connection = await getConnection();
            await connection.query("INSERT INTO language SET ?", language);
            res.json({ message: "language added successfully" })
        }
    } catch (error) {
        res.status(500)
        res.send(error.message);

    }
};

// metodo para actualizar un lenguaje
const updateLenguage = async (req, res) => {
    try {
        const { id } = req.params
        const { name, programmers } = req.body;
        if (id == undefined || name == undefined || programmers == undefined) {
            res.status(400).json({ message: "bad request. Please fill all fields" })
        } else {
            const languaje = { name, programmers }
            const connection = await getConnection()
            await connection.query("UPDATE language SET ? WHERE id = ?", [languaje, id])
            res.send({ message: "language update successfully" })
        };
    } catch (error) {
        res.status(500);
        res.send(error.message);

    }
};

// metodo para eliminar un lenguaje
const deleteLenguage = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await getConnection()
        await connection.query("DELETE FROM language WHERE id = ?", id)
        res.send({ message: "language removed successfully" });
    } catch (error) {
        res.status(500);
        res.send(error.message);

    }
};



export const methods = {
    getLenguages,
    addLenguages,
    getLenguage,
    updateLenguage,
    deleteLenguage
}