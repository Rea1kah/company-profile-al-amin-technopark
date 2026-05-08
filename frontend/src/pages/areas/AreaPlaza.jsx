import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AreaPlaza() {
  const { i18n } = useTranslation();
  const id = i18n.language === 'id';
  return (
    <div>
      <section className="relative h-[70vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/plaza.jpg')" }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-1/2 right-16 -translate-y-1/2 bg-red-600/80 text-white px-6 py-4 rounded-xl text-center">
          <p className="font-black text-xl">AREA PLAZA</p>
          <p className="font-black text-xl">UTAMA</p>
          <p className="font-bold text-lg mt-1">20.500 m²</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/peta-kawasan" className="flex items-center gap-2 text-green-700 mb-8 hover:underline font-medium">
          <ArrowLeft size={18} /> Kembali ke Peta Kawasan
        </Link>
        <h1 className="text-3xl font-black text-gray-800 mb-6">
          {id ? 'Area Plaza Utama' : 'Main Plaza Area'}
        </h1>
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-gray-700 leading-relaxed">
          {id ? (
            <p>Plaza utama di Techno Park Al Amin merupakan ruang terbuka pusat yang menjadi titik pertemuan dan aktivitas utama di kawasan tersebut. Area ini dirancang sebagai ruang publik yang nyaman dan representatif, digunakan untuk berbagai kegiatan seperti acara komunitas, pameran produk, hingga kegiatan seremonial. Selain sebagai ruang interaksi sosial, plaza utama juga berfungsi sebagai identitas kawasan, mencerminkan karakter inovatif dan kolaboratif dari Techno Park Al Amin.</p>
          ) : (
            <p>The main plaza at Al Amin Techno Park is the central open space that serves as the primary meeting and activity point. Designed as a comfortable and representative public space, it hosts community events, product exhibitions, and ceremonial activities. It also serves as the area's identity, reflecting the innovative and collaborative character of Al Amin Techno Park.</p>
          )}
        </div>
      </div>
    </div>
  );
}