import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AreaPertanian() {
  const { i18n } = useTranslation();
  const id = i18n.language === 'id';
  return (
    <div>
      <section className="relative h-[70vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/pertanian.jpg')" }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-1/2 right-16 -translate-y-1/2 bg-green-700/80 text-white px-6 py-4 rounded-xl text-center">
          <p className="font-black text-xl">AREA PERTANIAN,</p>
          <p className="font-black text-xl">KEBUN, DAN</p>
          <p className="font-black text-xl">AGROTECHNOPARK</p>
          <p className="font-bold text-lg mt-1">8.470 m²</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/peta-kawasan" className="flex items-center gap-2 text-green-700 mb-8 hover:underline font-medium">
          <ArrowLeft size={18} /> Kembali ke Peta Kawasan
        </Link>
        <h1 className="text-3xl font-black text-gray-800 mb-6">
          {id ? 'Area Pertanian Kebun Dan Agrotechnopark' : 'Agriculture, Garden and Agrotechnopark Area'}
        </h1>
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-gray-700 leading-relaxed">
          {id ? (
            <p>Area Pertanian Kebun dan Agrotechnopark Al Amin merupakan zona yang difokuskan pada kegiatan budidaya tanaman serta pengembangan teknologi pertanian modern. Area ini digunakan untuk menanam berbagai komoditas, baik hortikultura, tanaman pangan, maupun tanaman unggulan lokal, dengan penerapan metode yang lebih efisien dan ramah lingkungan. Di dalamnya biasanya terdapat fasilitas seperti lahan demonstrasi (demplot), rumah kaca (greenhouse), sistem irigasi modern, serta area penelitian dan pelatihan.</p>
          ) : (
            <p>The Al Amin Agrotechnopark focuses on cultivating various crops and developing modern agricultural technology. It includes demonstration plots, greenhouses, modern irrigation systems, and research and training facilities, serving as an education and innovation center for farmers, students, and communities.</p>
          )}
        </div>
      </div>
    </div>
  );
}