import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AreaStableKuda() {
  const { i18n } = useTranslation();
  const id = i18n.language === 'id';
  return (
    <div>
      <section className="relative h-[70vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/stable.jpg')" }}> <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-1/2 right-16 -translate-y-1/2 bg-green-700/80 text-white px-6 py-4 rounded-xl text-center">
          <p className="font-black text-xl">AREA STABLE KUDA</p>
          <p className="font-black text-xl">DAN GRAZING AREA</p>
          <p className="font-bold text-lg mt-1">17.800 m²</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/peta-kawasan" className="flex items-center gap-2 text-green-700 mb-8 hover:underline font-medium">
          <ArrowLeft size={18} /> Kembali ke Peta Kawasan
        </Link>
        <h1 className="text-3xl font-black text-gray-800 mb-8">
          {id ? 'Area Stable Kuda Dan Grazing Area' : 'Horse Stable and Grazing Area'}
        </h1>
        <div className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <h2 className="font-bold text-xl mb-3">{id ? 'Area Stable Kuda (Kandang Kuda)' : 'Horse Stable Area'}</h2>
            <p className="text-gray-700 leading-relaxed">
              {id ? 'Area stable adalah tempat kuda dikandangkan untuk beristirahat, makan, dan mendapatkan perawatan. Biasanya terdiri dari beberapa stall (ruang individu untuk tiap kuda), tempat pakan dan minum, serta ruang penyimpanan perlengkapan seperti pelana dan alat kebersihan.' : 'The stable area is where horses are housed for rest, feeding, and care. It typically consists of individual stalls for each horse, feeding and watering areas, and storage for equipment such as saddles and cleaning tools.'}
            </p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <h2 className="font-bold text-xl mb-3">{id ? 'Grazing Area (Area Penggembalaan)' : 'Grazing Area'}</h2>
            <p className="text-gray-700 leading-relaxed">
              {id ? 'Grazing area adalah lahan terbuka tempat kuda dilepas untuk merumput dan bergerak bebas. Area ini penting untuk kesehatan fisik dan mental kuda karena mereka bisa berolahraga secara alami dan mendapatkan pakan segar (rumput). Biasanya dilengkapi pagar pembatas dan sumber air minum.' : 'The grazing area is open land where horses are released to graze and move freely. This area is important for the physical and mental health of horses as they can exercise naturally and get fresh feed (grass). Usually equipped with boundary fences and water sources.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}