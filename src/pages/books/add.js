import { useRouter }  from "next/router";
import BookForm from "../../components/BookForm";
import Navbar from "../../components/navbar";

export default function AddBook() { 
    const router = useRouter();
    const AddBook = async (book) => {
        await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });
        router.push('/books')
    };
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center p-8 bg-blue-900 min-h-screen">
                <BookForm onSubmit={AddBook} />
            </div>
            <style jsx>{`
                .flex {
                    display: flex;
                }
                .flex-col {
                    flex-direction: column;
                }
                .items-center {
                    align-items: center;
                }
                .justify-center {
                    justify-content: center;
                }
                .p-8 {
                    padding: 2rem;
                }
                .bg-blue-900 {
                    background: #1e3a8a;
                }
                .min-h-screen {
                    min-height: 100vh;
                }
                /* Optional: style for BookForm container */
                div :global(form) {
                    background: #fff;
                    padding: 2rem 2.5rem;
                    border-radius: 10px;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
                    min-width: 320px;
                }
            `}</style>
        </>
    )
}