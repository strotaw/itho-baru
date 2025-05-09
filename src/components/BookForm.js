import {useState, useEffect} from "react";

export default function BookForm({onSubmit, initialData}) {
    const [title, setTitle] = useState(initialData?.title || '');
    const [author, setAuthor] = useState(initialData?.author || '');
    const [date, setDate] = useState(initialData?.date || '');
    const [category, setCategory] = useState(initialData?.category || '');
    const [stock, setStock] = useState(initialData?.stock || 1);

    useEffect(() => {
        setTitle(initialData?.title);
        setAuthor(initialData?.author);
        setDate(initialData?.date);
        setCategory(initialData?.category);
        setStock(initialData?.stock || 1);
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            title,
            author,
            date,
            category,
            stock,
        });
    };

    return (
        <div className="flex justify-center items-center p-8 bg-cyan-400 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
                <div className="flex flex-col">
                    <label htmlFor="title" className="mb-2 font-bold">Judul</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg text-base"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="author" className="mb-2 font-bold">Penulis</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg text-base"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="date" className="mb-2 font-bold">Tanggal Pinjam Buku</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg text-base"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="stock" className="mb-2 font-bold">Jumlah Stok</label>
                    <input
                        type="number"
                        id="stock"
                        value={stock}
                        min={1}
                        onChange={(e) => setStock(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg text-base"
                        placeholder="Jumlah stok buku"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="category" className="mb-2 font-bold">Kategori Buku</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg text-base"
                        required
                    >
                        <option value="">Pilih Kategori</option>
                        <option value="Fiksi">Fiksi</option>
                        <option value="Non-Fiksi">Non-Fiksi</option>
                        <option value="Komik">Komik</option>
                        <option value="Pelajaran">Pelajaran</option>
                        <option value="Lainnya">Lainnya</option>
                    </select>
                </div>
                <button type="submit" className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition">
                    Simpan
                </button>
            </form>
        </div>
    );
}
