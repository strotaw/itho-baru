export async function getBooks() {
    const res = await fetch('/api/books');
    if (!res.ok)throw new Error('Gagal Mengambil Buku');
    return res.json();
}

export async function getBook(id) {
    const res = await fetch(`/api/books/${id}`);
    if (!res.ok)throw new Error('Gagal Mengambil Buku');
    return res.json();
}

export async function createBook(title, author, category, stock) {
    const res = await fetch('/api/books', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(title, author, category, stock)
    });
    if (!res.ok)throw new Error('Gagal Menambahkan Buku');
    return res.json();
}

export async function updateBook(id, title, author, category, stock) {
    const res = await fetch(`/api/books/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(title, author, category, stock)
    });
    if (!res.ok)throw new Error('Gagal Mengupdate Buku');
    return res.json();
}

export async function deleteBook(id) {
    const res = await fetch(`/api/books/${id}`, {
        method: 'DELETE'
    });
    if (!res.ok) throw new Error('Gagal Menghapus Buku');
    // Jika respons kosong (No Content), jangan panggil res.json()
    if (res.status === 204) return {};
    return res.json();
}