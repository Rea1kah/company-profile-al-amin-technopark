import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Kontak() {
  const { t } = useTranslation();
  return (
    <div>
      <section className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative w-full max-w-3xl mx-auto px-4 py-20">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-black text-green-400 drop-shadow">{t('kontak.judul')}</h1>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-2 mb-2 rounded" />
            <p className="text-white text-lg">{t('kontak.subjudul')}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-10 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-green-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">{t('kontak.lokasi')}</h3>
                <p className="text-gray-600 mt-1">{t('kontak.alamat')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-green-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">{t('kontak.email')}</h3>
                <a href="mailto:alamin14@Gmail.com" className="text-green-700 hover:underline">alamin14@Gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-green-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">{t('kontak.telepon')}</h3>
                <p className="text-gray-600">08123456789</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}