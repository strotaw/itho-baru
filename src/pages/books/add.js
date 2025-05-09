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
        </>
    )
}