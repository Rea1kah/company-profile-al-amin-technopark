import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AreaParkir() {
  const { i18n } = useTranslation();
  const id = i18n.language === 'id';
  return (
    <div>
      <section className="relative h-[70vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/parkir.jpg')" }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-1/2 right-16 -translate-y-1/2 bg-pink-600/80 text-white px-6 py-4 rounded-xl text-center">
          <p className="font-black text-xl">AREA PARKIR</p>
          <p className="font-black text-xl">DAN PROSESSING</p>
          <p className="font-bold text-lg mt-1">10.500 m²</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/peta-kawasan" className="flex items-center gap-2 text-green-700 mb-8 hover:underline font-medium">
          <ArrowLeft size={18} /> Kembali ke Peta Kawasan
        </Link>
        <h1 className="text-3xl font-black text-gray-800 mb-6">
          {id ? 'Area Parkir Dan Processing' : 'Parking and Processing Area'}
        </h1>
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-gray-700 leading-relaxed">
          {id ? (
            <p>Area Parkir dan Processing di Techno Park Al Amin merupakan zona strategis yang berada di dekat pusat kawasan (plaza). Area ini berfungsi sebagai tempat parkir kendaraan pengunjung, area pengolahan hasil pertanian maupun peternakan, serta lokasi strategis untuk akses keluar-masuk kawasan.</p>
          ) : (
            <p>The Parking and Processing Area at Al Amin Techno Park is a strategic zone located near the center of the complex (plaza). This area serves as visitor parking, processing area for agricultural and livestock products, and a strategic location for area access.</p>
          )}
        </div>
      </div>
    </div>
  );
}