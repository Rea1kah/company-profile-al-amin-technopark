import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { beritaAPI } from '../../services/api';
import toast from 'react-hot-toast';
import { Plus, Pencil, Trash2, ArrowLeft, X } from 'lucide-react';

const KATEGORI = ['Kegiatan', 'Inovasi', 'Pengumuman', 'Kolaborasi'];
const empty = { judul: '', judulEn: '', konten: '', kontenEn: '', kategori: 'Kegiatan', penulis: 'Al Amin Techno Park', diterbitkan: 'false', gambar: null };

export default function AdminBerita() {
  const [berita, setBerita] = useState([]);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetch = () => beritaAPI.getAllAdmin().then(r => setBerita(r.data)).catch(() => {});
  useEffect(() => { fetch(); }, []);

  const openAdd = () => { setForm(empty); setEditId(null); setModal(true); };
  const openEdit = (item) => { setForm({ ...item, diterbitkan: String(item.diterbitkan), gambar: null }); setEditId(item.id); setModal(true); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => { if (v !== null) fd.append(k, v); });
      if (editId) await beritaAPI.update(editId, fd);
      else await beritaAPI.create(fd);
      toast.success(editId ? 'Berita diperbarui!' : 'Berita ditambahkan!');
      setModal(false); fetch();
    } catch { toast.error('Gagal menyimpan berita'); }
    finally { setLoading(false); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Hapus berita ini?')) return;
    await beritaAPI.delete(id);
    toast.success('Berita dihapus'); fetch();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-green-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/admin" className="hover:text-green-300"><ArrowLeft size={20} /></Link>
          <span className="font-bold text-lg">Kelola Berita</span>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 bg-white text-green-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-50">
          <Plus size={16} /> Tambah Berita
        </button>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">Judul</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">Kategori</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">Status</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">Tanggal</th>
                <th className="text-right px-6 py-4 font-semibold text-gray-600">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {berita.map(item => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800 max-w-xs truncate">{item.judul}</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">{item.kategori}</span></td>
                  <td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${item.diterbitkan ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>{item.diterbitkan ? 'Diterbitkan' : 'Draft'}</span></td>
                  <td className="px-6 py-4 text-gray-500">{new Date(item.createdAt).toLocaleDateString('id-ID')}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(item)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Pencil size={16} /></button>
                      <button onClick={() => handleDelete(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {berita.length === 0 && <tr><td colSpan={5} className="text-center py-12 text-gray-400">Belum ada berita</td></tr>}
            </tbody>
          </table>
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold">{editId ? 'Edit Berita' : 'Tambah Berita'}</h2>
              <button onClick={() => setModal(false)}><X size={22} /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {[['judul', 'Judul (ID)'], ['judulEn', 'Judul (EN)']].map(([key, label]) => (
                <div key={key}>
                  <label className="text-sm font-medium text-gray-700 block mb-1">{label}</label>
                  <input value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-green-500" required />
                </div>
              ))}
              {[['konten', 'Konten (ID)'], ['kontenEn', 'Konten (EN)']].map(([key, label]) => (
                <div key={key}>
                  <label className="text-sm font-medium text-gray-700 block mb-1">{label}</label>
                  <textarea value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} rows={4}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-green-500 resize-none" required />
                </div>
              ))}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Kategori</label>
                  <select value={form.kategori} onChange={e => setForm({ ...form, kategori: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-green-500">
                    {KATEGORI.map(k => <option key={k}>{k}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Status</label>
                  <select value={form.diterbitkan} onChange={e => setForm({ ...form, diterbitkan: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-green-500">
                    <option value="true">Diterbitkan</option>
                    <option value="false">Draft</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Penulis</label>
                <input value={form.penulis} onChange={e => setForm({ ...form, penulis: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Gambar</label>
                <input type="file" accept="image/*" onChange={e => setForm({ ...form, gambar: e.target.files[0] })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none" />
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