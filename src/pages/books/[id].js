import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BookForm from '../../components/BookForm';

export default function EditBook() {
  const router = useRouter();
  
  const { id } = router.query;
  const [book, setBook] = useState(null);

  const _getBookById = async () => {
    if (id) {
      const res = await fetch(`/api/books/${id}`);
      const data = await res.json();
      setBook(data);
    }
  };

  useEffect(() => {
    _getBookById();
    console.log(book, "ini book");
  }, [id]);

  const updateBook = async (data) => {
    await fetch(`/api/books/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    router.push('/books');
  };

  if (!book) return <p>Loading...</p>;
  return (
    <div className="edit-book-container">
      <h2>Edit Book</h2>
      <BookForm initialData={book} onSubmit={updateBook} />
      <style jsx>{`
        .edit-book-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: #f3f4f6;
        }
        h2 {
          margin-bottom: 24px;
          color: #1e3a8a;
        }
        .edit-book-container :global(form) {
          background: #fff;
          padding: 2rem 2.5rem;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          min-width: 320px;
        }
      `}</style>
    </div>
  );
}