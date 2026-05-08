import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const areas = [
  { id: 1, nama: 'Area Plaza Utama', luas: '20.500 m²', warna: 'bg-red-100 border-red-400', path: '/area/plaza-utama',
    fungsi: ['Area berkumpul pengunjung', 'Event / kegiatan utama', 'Pusat orientasi'] },
  { id: 2, nama: 'Area Pertanian, Kebun, dan Agrotechnopark', luas: '8.470 m² + 36.822 m²', warna: 'bg-green-100 border-green-400', path: '/area/pertanian-agrotechnopark',
    fungsi: ['Budidaya tanaman', 'Edukasi pertanian modern', 'Wisata edukasi agro'] },
  { id: 3, nama: 'Area Camping Ground, Lodge, dan Konservasi', luas: '49.705 m²', warna: 'bg-emerald-100 border-emerald-400', path: '/peta-kawasan',
    fungsi: ['Camping ground', 'Penginapan lodge', 'Konservasi alam'] },
  { id: 4, nama: 'Area Peternakan', luas: '27.050 m²', warna: 'bg-orange-100 border-orange-400', path: '/area/stable-kuda-grazing',
    fungsi: ['Sapi, Ayam, Kambing', 'Edukasi peternakan', 'Wisata interaksi hewan'] },
  { id: 5, nama: 'Area Parkir dan Processing', luas: '10.500 m²', warna: 'bg-purple-100 border-purple-400', path: '/area/parkir-prosessing',
    fungsi: ['Parkir kendaraan', 'Pengolahan hasil pertanian', 'Akses keluar-masuk'] },
  { id: 6, nama: 'Area Sport Centre dan Rusun', luas: '20.500 m²', warna: 'bg-red-100 border-red-400', path: '/area/sport-centre-rusun',
    fungsi: ['Fasilitas olahraga', 'Rumah susun', 'Aktivitas komunitas'] },
  { id: 7, nama: 'Area Stable Kuda dan Grazing Area', luas: '17.800 m²', warna: 'bg-green-100 border-green-400', path: '/area/stable-kuda-grazing',
    fungsi: ['Kandang kuda', 'Grazing area', 'Perawatan kuda'] },
  { id: 8, nama: 'Area Utilitas dan Pemeliharaan', luas: '8.083 m²', warna: 'bg-yellow-100 border-yellow-400', path: '/peta-kawasan',
    fungsi: ['Infrastruktur teknis', 'Gudang & maintenance', 'Area pendukung'] },
];

export default function PetaKawasan() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative h-72 bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-6 pb-10 w-full">
          <h1 className="text-white text-4xl font-black">{t('peta.judul')}</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <img src="/images/peta-kawasan.jpg" alt="Peta Kawasan"
            className="w-full rounded-2xl shadow-lg object-cover max-h-[500px]"
            onError={(e) => { e.target.src = 'https://placehold.co/1200x500/166534/white?text=Peta+Kawasan+STP+Al-Amin' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {areas.map((area) => (
            <div key={area.id} className={`border-2 ${area.warna} rounded-2xl p-6`}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-800 text-lg leading-tight">{area.nama}</h3>
                <span className="text-sm font-semibold text-gray-500 ml-2 whitespace-nowrap">{area.luas}</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                {area.fungsi.map((f, i) => <li key={i} className="flex items-center gap-2"><span className="text-green-600">•</span>{f}</li>)}
              </ul>
              <Link to={area.path} className="text-green-700 font-semibold text-sm hover:underline">
                {t('peta.selengkapnya')} →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}