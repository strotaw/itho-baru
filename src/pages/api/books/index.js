import {books} from "../../../../data";
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(books);
    }
    else if (req.method === 'POST') {
        const {title, author, date, category, stock} = req.body;
        const newBook = {
            id: Date.now(),
            title,
            author,
            date,
            category,
            stock,
        };
        books.push(newBook);
        res.status(201).json(newBook);

        const filePath = path.join(process.cwd(), 'data.js');
        const updatedData = `let books = ${JSON.stringify(books, null, 2)};
        module.exports = {books};`; fs.writeFileSync(filePath, updatedData, 'utf8'); 

        res.status(201).json(newBook);

    } 

}


