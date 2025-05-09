import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/navbar";

export default function Booklist() {
    const [books, setBook] = useState([]);

    const deleteBook = async (id) => {
        try {
            await fetch(`/api/books/${id}`, {
                method: 'DELETE',
            });
            setBook(books.filter((book) => book.id !== id));
        } catch (error) {
            console.error('Failed to delete the book:', error);
        }
    };

    useEffect(() => {
        fetch('http://localhost:3000/api/books')
        .then(res => res.json())
        .then(data => setBook(data))
    });

    return (
        <>
            <Navbar />
            <div>
                <h1>Book List</h1>
                <Link href="/books/add"><button>Add Book</button></Link>
                <ul className="no-bullets">
                    {books.map((b) => (
                        <li key={b.id}>
                            <p>Id : {b.id}</p>
                            <p>Judul : {b.title}</p>
                            <p>Penulis : {b.author}</p>
                            <p>Tanggal Terbit : {b.date}</p>
                            <p>Kategori : {b.category}</p>
                            <p>Stok : {b.stock}</p>
                            <Link href={`/books/${b.id}`}><button>Edit</button></Link>
                            <br></br>
                            <br></br>
                            <button onClick={() => deleteBook(b.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
