import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/navbar";
import {getBooks, deleteBook as apiDeleteBook } from "../../../lib/api/books";



export default function Booklist() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getBooks();
                setBooks(data);
            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        }
        fetchData();
    },[]);


    const deleteBook = async (id) => {
        try {
            await apiDeleteBook(id);
            setBooks(prevBooks => prevBooks.filter(books => books.id !== id));
        } catch (error) {
            console.error('Failed to delete the book:', error);
        }
    };


    return (
        <>
            <Navbar />
            <div>
                <h1>Book List</h1>
                <Link href="/books/add"><button>Add Book</button></Link>
                <ul className="book-grid">
                    {books.map((b) => (
                        <li key={b.id}>
                            <p className="book-title">{b.title}</p>
                            <p className="book-meta"><span className="meta-label">Penulis</span> : {b.author}</p>
                            <p className="book-meta"><span className="meta-label">Kategori</span> : {b.category}</p>
                            <p className="book-meta"><span className="meta-label">Stok</span> : {b.stock}</p>
                            <div className="action-row">
                                <Link href={`/books/${b.id}`}><button>Edit</button></Link>
                                <button onClick={() => deleteBook(b.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
                .book-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    list-style: none;
                    padding: 0;
                    margin-top: 32px;
                }
                li {
                    background: #fff;
                    padding: 18px 18px 14px 18px;
                    border-radius: 14px;
                    box-shadow: 0 4px 16px rgba(30, 58, 138, 0.08), 0 1.5px 4px rgba(0,0,0,0.04);
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    font-size: 1rem;
                    border: 1.5px solid #e0e7ef;
                    transition: box-shadow 0.2s, border 0.2s;
                    position: relative;
                    min-height: 180px;
                    font-family: 'Inter', 'Segoe UI', 'Arial', sans-serif;
                }
                li:hover {
                    box-shadow: 0 8px 24px rgba(30,58,138,0.13), 0 2px 8px rgba(0,0,0,0.06);
                    border: 1.5px solid #2563eb;
                }
                li::before {
                    content: "";
                    display: block;
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 6px;
                    border-radius: 14px 14px 0 0;
                    background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
                }
                .book-title {
                    font-weight: bold;
                    text-align: center;
                    width: 100%;
                    margin-bottom: 10px;
                    font-size: 1.08rem;
                    color: #1e293b;
                    letter-spacing: 0.5px;
                }
                .book-meta {
                    background: #f1f5f9;
                    border-radius: 6px;
                    padding: 4px 10px;
                    margin: 0 0 6px 0;
                    font-size: 0.97rem;
                    color: #334155;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                .meta-label {
                    font-weight: 600;
                    color: #2563eb;
                    margin-right: 2px;
                }
                p {
                    color: #1e293b;
                    margin: 0 0 6px 0;
                    font-size: 1rem;
                    font-family: inherit;
                }
                h1 {
                    text-align: center;
                    margin-bottom: 24px;
                    color: #2563eb;
                    letter-spacing: 1px;
                    font-family: 'Inter', 'Segoe UI', 'Arial', sans-serif;
                }
                .action-row {
                    display: flex;
                    gap: 10px;
                    margin-top: 16px;
                }
                .action-row :global(a) > button {
                    background: #2563eb;
                    font-family: inherit;
                }
                .action-row :global(a) > button:hover {
                    background: #1e40af;
                }
                .action-row > button:last-child {
                    background: #e00;
                    font-family: inherit;
                }
                .action-row > button:last-child:hover {
                    background: #b00;
                }
                button {
                    margin-right: 10px;
                    padding: 10px 22px;
                    font-size: 1.08rem;
                    border: none;
                    border-radius: 4px;
                    background: #0070f3;
                    color: white;
                    cursor: pointer;
                    transition: background 0.2s;
                    font-family: 'Inter', 'Segoe UI', 'Arial', sans-serif;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
                }
                button:hover {
                    background: #005bb5;
                }
                li > :global(a) > button {
                    margin-bottom: 0;
                }
                div {
                    max-width: 1200px;
                    margin: 40px auto;
                    padding: 20px;
                    font-family: 'Inter', 'Segoe UI', 'Arial', sans-serif;
                }
                @media (max-width: 1200px) {
                    .book-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                @media (max-width: 900px) {
                    .book-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 600px) {
                    .book-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </>
    );
}
