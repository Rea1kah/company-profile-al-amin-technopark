import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fasilitasAPI } from '../../services/api';
import toast from 'react-hot-toast';
import { Plus, Pencil, Trash2, ArrowLeft, X } from 'lucide-react';

const empty = { nama: '', namaEn: '', deskripsi: '', deskripsiEn: '', icon: '', urutan: 0, gambar: null };

export default function AdminFasilitas() {
  const [fasilitas, setFasilitas] = useState([]);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetch = () => fasilitasAPI.getAll().then(r => setFasilitas(r.data)).catch(() => {});
  useEffect(() => { fetch(); }, []);

  const openAdd = () => { setForm(empty); setEditId(null); setModal(true); };
  const openEdit = (item) => { setForm({ ...item, gambar: null }); setEditId(item.id); setModal(true); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => { if (v !== null) fd.append(k, v); });
      if (editId) await fasilitasAPI.update(editId, fd);
      else await fasilitasAPI.create(fd);
      toast.success(editId ? 'Fasilitas diperbarui!' : 'Fasilitas ditambahkan!');
      setModal(false); fetch();
    } catch { toast.error('Gagal menyimpan fasilitas'); }
    finally { setLoading(false); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Hapus fasilitas ini?')) return;
    await fasilitasAPI.delete(id);
    toast.success('Fasilitas dihapus'); fetch();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-green-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/admin" className="hover:text-green-300"><ArrowLeft size={20} /></Link>
          <span className="font-bold text-lg">Kelola Fasilitas</span>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 bg-white text-green-800 px-4 py-2 rounded-lg text-sm font-semibold">
          <Plus size={16} /> Tambah Fasilitas
        </button>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-4">
          {fasilitas.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <img src={item.gambar || 'https://placehold.co/400x200/166534/white?text=Fasilitas'}
                alt={item.nama} className="w-full h-40 object-cover"
                onError={e => { e.target.src = 'https://placehold.co/400x200/166534/white?text=Fasilitas' }} />
              <div className="p-4">
                <h3 className="font-bold text-gray-800">{item.nama}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.deskripsi}</p>
                <div className="flex gap-2 mt-3">
                  <button onClick={() => openEdit(item)} className="flex items-center gap-1 text-sm text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg"><Pencil size={14} /> Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="flex items-center gap-1 text-sm text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg"><Trash2 size={14} /> Hapus</button>
                </div>
              </div>
            </div>
          ))}
          {fasilitas.length === 0 && <div className="col-span-3 text-center py-20 text-gray-400">Belum ada fasilitas</div>}
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold">{editId ? 'Edit Fasilitas' : 'Tambah Fasilitas'}</h2>
              <button onClick={() => setModal(false)}><X size={22} /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {[['nama', 'Nama (ID)'], ['namaEn', 'Nama (EN)'], ['deskripsi', 'Deskripsi (ID)'], ['deskripsiEn', 'Deskripsi (EN)']].map(([key, label]) => (
                <div key={key}>
                  <label className="text-sm font-medium text-gray-700 block mb-1">{label}</label>
                  {key.includes('eskripsi') ? (
                    <textarea value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} rows={3}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-green-500 resize-none" required />
                  ) : (
                    <input value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-green-500" required />
                  )}
                </div>
              ))}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Urutan Tampil</label>
                <input type="number" value={form.urutan} onChange={e => setForm({ ...form, urutan: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Gambar</label>
                <input type="file" accept="image/*" onChange={e => setForm({ ...form, gambar: e.target.files[0] })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setModal(false)}
                  className="flex-1 border border-gray-200 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-50">Batal</button>
                <button type="submit" disabled={loading}
                  className="flex-1 bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 disabled:opacity-50">
                  {loading ? 'Menyimpan...' : 'Simpan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}