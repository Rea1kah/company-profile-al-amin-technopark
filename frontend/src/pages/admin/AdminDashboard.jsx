import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Newspaper, Image, LogOut, LayoutDashboard } from 'lucide-react';
import { beritaAPI, fasilitasAPI } from '../../services/api';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem('adminData') || '{}');
  const [stats, setStats] = useState({ berita: 0, fasilitas: 0 });

  useEffect(() => {
    Promise.all([beritaAPI.getAllAdmin(), fasilitasAPI.getAll()])
      .then(([b, f]) => setStats({ berita: b.data.length, fasilitas: f.data.length }))
      .catch(() => {});
  }, []);

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-green-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LayoutDashboard size={22} />
          <span className="font-bold text-lg">Admin Panel — Al Amin Techno Park</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-green-200">Halo, {admin.nama}</span>
          <button onClick={logout} className="flex items-center gap-2 bg-green-700 hover:bg-green-900 px-3 py-2 rounded-lg text-sm transition">
            <LogOut size={16} /> Keluar
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-black text-gray-800 mb-8">Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-8 shadow-sm flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Newspaper size={28} className="text-blue-700" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Berita</p>
              <p className="text-4xl font-black text-gray-800">{stats.berita}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm flex items-center gap-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Image size={28} className="text-green-700" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Fasilitas</p>
              <p className="text-4xl font-black text-gray-800">{stats.fasilitas}</p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold text-gray-700 mb-4">Kelola Konten</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/admin/berita" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex items-center gap-4 group">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition">
              <Newspaper size={22} className="text-blue-700" />
            </div>
            <div>
              <p className="font-bold text-gray-800">Kelola Berita</p>
              <p className="text-sm text-gray-500">Tambah, edit, hapus artikel berita</p>
            </div>
          </Link>
          <Link to="/admin/fasilitas" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex items-center gap-4 group">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition">
              <Image size={22} className="text-green-700" />
            </div>
            <div>
              <p className="font-bold text-gray-800">Kelola Fasilitas</p>
              <p className="text-sm text-gray-500">Tambah, edit, hapus data fasilitas</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}