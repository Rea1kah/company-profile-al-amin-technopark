import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AreaSportCentre() {
  const { i18n } = useTranslation();
  const id = i18n.language === 'id';
  return (
    <div>
      <section className="relative h-[70vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/sport.jpg')" }}>
        <div className="absolute inset-0 bg-black/30" />
      </section>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/peta-kawasan" className="flex items-center gap-2 text-green-700 mb-8 hover:underline font-medium">
          <ArrowLeft size={18} /> Kembali ke Peta Kawasan
        </Link>
        <h1 className="text-3xl font-black text-gray-800 mb-8">
          {id ? 'Area Sport Centre Dan Rusun' : 'Sport Centre and Rusun Area'}
        </h1>
        <div className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <h2 className="font-bold text-xl mb-3">{id ? 'Area Sport Centre' : 'Sport Centre Area'}</h2>
            <p className="text-gray-700 leading-relaxed">
              {id ? 'Merupakan fasilitas umum yang digunakan untuk kegiatan olahraga dan aktivitas fisik warga. Biasanya mencakup lapangan (sepak bola, futsal, atau basket), area jogging, dan ruang terbuka untuk senam atau kegiatan komunitas.' : 'A public facility used for sports and physical activities. Usually includes courts (soccer, futsal, or basketball), jogging area, and open spaces for exercise or community activities.'}
            </p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <h2 className="font-bold text-xl mb-3">{id ? 'Area Rusun (Rumah Susun)' : 'Rusun (Apartment) Area'}</h2>
            <p className="text-gray-700 leading-relaxed">
              {id ? 'Rusun adalah hunian bertingkat yang dibangun untuk menampung banyak keluarga dalam satu kawasan dengan lebih efisien. Di Kampung Darul Al Amin, rusun berfungsi sebagai tempat tinggal yang terjangkau dan tertata, biasanya dilengkapi fasilitas dasar seperti air bersih, listrik, dan area bersama.' : 'Rusun is a multi-story residence built to accommodate many families in one area more efficiently. Equipped with basic facilities such as clean water, electricity, and common areas, aiming to improve residents\' quality of life.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}