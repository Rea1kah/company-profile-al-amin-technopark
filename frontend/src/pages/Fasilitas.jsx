import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fasilitasAPI } from '../services/api';

const defaultFasilitas = [
  { id: 1, nama: 'Perpustakaan', namaEn: 'Library', gambar: 'https://placehold.co/300x200/166534/white?text=Perpustakaan' },
  { id: 2, nama: 'Laboratorium', namaEn: 'Laboratory', gambar: 'https://placehold.co/300x200/166534/white?text=Lab' },
  { id: 3, nama: 'Rusun', namaEn: 'Dormitory', gambar: 'https://placehold.co/300x200/166534/white?text=Rusun' },
  { id: 4, nama: 'Perkebunan', namaEn: 'Plantation', gambar: 'https://placehold.co/300x200/166534/white?text=Perkebunan' },
  { id: 5, nama: 'Peternakan', namaEn: 'Livestock', gambar: 'https://placehold.co/300x200/166534/white?text=Peternakan' },
  { id: 6, nama: 'Camping', namaEn: 'Camping', gambar: 'https://placehold.co/300x200/166534/white?text=Camping' },
  { id: 7, nama: 'Market', namaEn: 'Market', gambar: 'https://placehold.co/300x200/166534/white?text=Market' },
  { id: 8, nama: 'Masjid', namaEn: 'Mosque', gambar: 'https://placehold.co/300x200/166534/white?text=Masjid' },
  { id: 9, nama: 'Parkiran', namaEn: 'Parking', gambar: 'https://placehold.co/300x200/166534/white?text=Parkiran' },
];

export default function Fasilitas() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [fasilitas, setFasilitas] = useState(defaultFasilitas);

  useEffect(() => {
    fasilitasAPI.getAll()
      .then(res => { if (res.data.length > 0) setFasilitas(res.data); })
      .catch(() => {});
  }, []);

  return (
    <div>
      <section className="relative h-64 bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-6 pb-8 w-full">
          <h1 className="text-white text-3xl font-black">{t('fasilitas.judul')}</h1>
          <p className="text-white/80 text-lg">{t('fasilitas.subjudul')}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-gray-600 max-w-xl mb-10">{t('fasilitas.deskripsi')}</p>
        <h2 className="text-2xl font-bold text-green-700 mb-8">{t('fasilitas.akses')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {fasilitas.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-3 group cursor-pointer">
              <img src={item.gambar || 'https://placehold.co/300x200/166534/white?text=Fasilitas'}
                alt={item.nama}
                className="w-full h-48 object-cover rounded-xl shadow group-hover:shadow-lg transition"
                onError={(e) => { e.target.src = 'https://placehold.co/300x200/166534/white?text=Fasilitas' }} />
              <h3 className="font-semibold text-gray-800 text-lg group-hover:text-green-700 transition">
                {lang === 'en' && item.namaEn ? item.namaEn : item.nama}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}