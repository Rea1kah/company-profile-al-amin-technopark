import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Users, Globe } from 'lucide-react';

const zones = [
  { key: 'z1', icon: '🏢', path: '/area/sport-centre-rusun' },
  { key: 'z2', icon: '🏪', path: '/area/parkir-prosessing' },
  { key: 'z3', icon: '🏛️', path: '/area/plaza-utama' },
  { key: 'z4', icon: '🌱', path: '/area/pertanian-agrotechnopark' },
  { key: 'z5', icon: '🐄', path: '/area/stable-kuda-grazing' },
  { key: 'z6', icon: '⛺', path: '/peta-kawasan' },
  { key: 'z7', icon: '⚙️', path: '/peta-kawasan' },
  { key: 'z8', icon: '🕌', path: '/peta-kawasan' },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <p className="text-white/80 text-sm font-semibold tracking-widest mb-3">{t('hero.tag')}</p>
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight max-w-2xl mb-4">
            {t('hero.judul')}
          </h1>
          <p className="text-white/80 text-base max-w-lg mb-8">{t('hero.deskripsi')}</p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/peta-kawasan"
              className="flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
              <Users size={18} /> {t('hero.btnKawasan')}
            </Link>
            <Link to="/jelajahi-360"
              className="flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              <Globe size={18} /> {t('hero.btnVideo')}
            </Link>
          </div>
        </div>
      </section>

      {/* Zones Grid */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">{t('zona.judul')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {zones.map(({ key, icon, path }) => (
              <Link key={key} to={path}
                className="flex flex-col items-center gap-3 p-6 border border-gray-200 rounded-2xl hover:shadow-lg hover:border-green-400 transition group">
                <span className="text-4xl">{icon}</span>
                <span className="text-sm font-medium text-gray-700 text-center group-hover:text-green-700">
                  {t(`zona.${key}`)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="bg-cover bg-center py-20 px-6 relative"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-green-400 font-semibold text-sm tracking-widest mb-2">{t('virtualTour.tag')}</p>
            <h2 className="text-white text-4xl font-black mb-3">{t('virtualTour.judul')}</h2>
            <p className="text-white/80 max-w-md">{t('virtualTour.deskripsi')}</p>
          </div>
          <Link to="/jelajahi-360"
            className="flex items-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition whitespace-nowrap">
            <Globe size={20} /> {t('virtualTour.btn')}
          </Link>
        </div>
      </section>
    </div>
  );
}