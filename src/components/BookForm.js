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
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-content">
                <div className="flex flex-col">
                    <label htmlFor="title" className="mb-2 font-bold">Judul : </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg text-base"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="author" className="mb-2 font-bold">Penulis : </label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg text-base"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="stock" className="mb-2 font-bold">Jumlah Stok : </label>
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
                    <label htmlFor="category" className="mb-2 font-bold">Kategori Buku : </label>
                    <div className="category-grid">
                        {["Fiksi", "Non-Fiksi", "Komik", "Pelajaran", "Lainnya"].map((cat) => (
                            <label key={cat} className={`category-option${category === cat ? " selected" : ""}`}>
                                <input
                                    type="radio"
                                    name="category"
                                    value={cat}
                                    checked={category === cat}
                                    onChange={() => setCategory(cat)}
                                    style={{ display: "none" }}
                                    required
                                />
                                {cat}
                            </label>
                        ))}
                    </div>
                </div>
                <button type="submit" className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition">
                    Simpan
                </button>
            </form>
            <style jsx>{`
                .form-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2rem;
                    background: #e0f2fe;
                    border-radius: 12px;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
                    font-family: 'Inter', 'Segoe UI', 'Arial', sans-serif;
                }
                .form-content {
                    width: 100%;
                    max-width: 400px;
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;
                    font-family: 'Inter', 'Segoe UI', 'Arial', sans-serif;
                }
                label {
                    margin-bottom: 0.5rem;
                    font-weight: bold;
                    color: #1e293b;
                    font-family: inherit;
                }
                input, select {
                    padding: 0.6rem;
                    border: 1px solid #cbd5e1;
                    border-radius: 8px;
                    font-size: 1rem;
                    background: #fff;
                    color: #0f172a;
                    font-family: inherit;
                }
                input:focus, select:focus {
                    outline: none;
                    border-color: #2563eb;
                    box-shadow: 0 0 0 2px #93c5fd;
                }
                button[type="submit"] {
                    padding: 0.8rem;
                    background: #2563eb;
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background 0.2s;
                    font-family: inherit;
                }
                button[type="submit"]:hover {
                    background: #1e40af;
                }
                .category-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 0.5rem;
                    margin-top: 0.2rem;
                    margin-bottom: 0.5rem;
                }
                .category-option {
                    background: #f1f5f9;
                    border-radius: 6px;
                    padding: 0.5rem 0.8rem;
                    text-align: center;
                    cursor: pointer;
                    border: 1px solid #cbd5e1;
                    font-family: inherit;
                    font-size: 1rem;
                    transition: background 0.2s, border 0.2s;
                    user-select: none;
                }
                .category-option.selected {
                    background: #2563eb;
                    color: #fff;
                    border: 1.5px solid #1e40af;
                }
                .category-option:hover {
                    background: #dbeafe;
                }
            `}</style>
        </div>
    );
}
