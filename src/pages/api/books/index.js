const BACKEND_URL = 'http://localhost:5000';

export default async function handler(req, res) {
    const {method} = req;

    switch (method) {
        case 'GET': {
            const fetchRes = await fetch(`${BACKEND_URL}/books`);
            const data = await fetchRes.json();
            return res.status(fetchRes.status).json(data);
        }
        case 'POST': {
            const {title, author, category, stock} = req.body;
            console.log(title, author, category, stock);
            const fetchRes = await fetch(`${BACKEND_URL}/books`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'},
                body: JSON.stringify({
                    title: title,
                    author: author,
                    category: category,
                    stock: stock
                })
            });
            const data = await fetchRes.json();
            return res.status(fetchRes.status).json(data);
        } 
        default: 
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).json({message: "method not allowed"});
    }
}


