import { useTranslation } from 'react-i18next';

const nilai = [
  { icon: '🔬', id: 'Inovatif', en: 'Innovative', descId: 'Desain Berkelanjutan Dengan Insfrastruktur Modern', descEn: 'Sustainable Design With Modern Infrastructure' },
  { icon: '🤝', id: 'Kolaboratif', en: 'Collaborative', descId: 'Pusat Riset dan Inovasi Untuk Teknologi Masa Depan', descEn: 'Research & Innovation Center for Future Technology' },
  { icon: '⭐', id: 'Integritas', en: 'Integrity', descId: 'Ekosistem Kolaboratif Antara, Industri, dan Akademik', descEn: 'Collaborative Ecosystem Between Industry and Academia' },
  { icon: '🌿', id: 'Berkelanjutan', en: 'Sustainable', descId: 'Berkomitmen pada pembangunan yang ramah lingkungan', descEn: 'Committed to environmentally friendly development' },
  { icon: '🎓', id: 'Unggul', en: 'Excellent', descId: 'Menghasilkan kualitas terbaik untuk masa depan', descEn: 'Producing the best quality for the future' },
];

const timeline = [
  { year: '2021', id: 'Gagasan awal pengembangan kawasan inovasi berbasis pendidikan dan teknologi.', en: 'Initial idea for developing an innovation area based on education and technology.' },
  { year: '2022', id: 'Perencanaan dan pembangunan infrastruktur tahap pertama Al Amin Techno Park.', en: 'Planning and construction of first phase infrastructure.' },
  { year: '2026', id: 'Peresmian kawasan dan dimulainya berbagai program riset serta inkubasi bisnis.', en: 'Area inauguration and the start of various research programs and business incubation.' },
  { year: '2027', id: 'Pengembangan fasilitas dan perbuatan kerja sama dengan berbagai mitra industri.', en: 'Facility development and cooperation with various industry partners.' },
  { year: '2028', id: 'Terus berinovasi dan tumbuh menjadi ekosistem unggulan untuk masa depan.', en: 'Continuously innovating and growing into a leading ecosystem for the future.' },
];

export default function TentangKami() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-6 pb-8 w-full">
          <h1 className="text-white text-3xl font-black">{t('nav.tentang')}</h1>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('tentang.judul')}</h2>
            <p className="text-gray-600 leading-relaxed">{t('tentang.deskripsi')}</p>
          </div>
          <img src="/images/tentang.jpg" alt="Tentang" className="rounded-xl shadow-lg w-full h-64 object-cover"
            onError={(e) => { e.target.src = 'https://placehold.co/600x400/166534/white?text=Al+Amin+Techno+Park' }} />
        </div>
      </section>

      {/* Visi Misi */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-green-700 font-semibold text-sm tracking-widest mb-6">VISI & MISI</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full border-2 border-green-700 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-700" />
                </div>
                <h3 className="text-xl font-bold">{t('tentang.visi')}</h3>
              </div>
              <p className="text-gray-600">{t('tentang.visiText')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full border-2 border-green-700 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-700" />
                </div>
                <h3 className="text-xl font-bold">{t('tentang.misi')}</h3>
              </div>
              <ul className="text-gray-600 space-y-2 list-disc list-inside">
                <li>{lang === 'id' ? 'Mengembangkan ekosistem inovasi yang kolaboratif dan berkelanjutan.' : 'Develop a collaborative and sustainable innovation ecosystem.'}</li>
                <li>{lang === 'id' ? 'Mendukung riset dan teknologi untuk menjawab tantangan masa depan.' : 'Support research and technology to address future challenges.'}</li>
                <li>{lang === 'id' ? 'Meningkatkan kualitas pendidikan dan kewirausahaan berbasis teknologi.' : 'Improve the quality of technology-based education and entrepreneurship.'}</li>
                <li>{lang === 'id' ? 'Mendorong kemitraan strategis dengan berbagai pihak.' : 'Encourage strategic partnerships with various parties.'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <p className="text-green-700 font-semibold text-sm tracking-widest mb-8">{t('tentang.nilaiKami')}</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {nilai.map((n) => (
            <div key={n.id} className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-2xl hover:shadow-md transition">
              <span className="text-3xl mb-3">{n.icon}</span>
              <h4 className="font-bold text-gray-800">{lang === 'id' ? n.id : n.en}</h4>
              <p className="text-xs text-gray-500 mt-2">{lang === 'id' ? n.descId : n.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-green-700 font-semibold text-sm tracking-widest mb-2">{t('tentang.sejarah')}</p>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">{t('tentang.perjalanan')}</h2>
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-green-600 mt-1 flex-shrink-0" />
                    <div className="w-0.5 bg-green-200 flex-1 mt-1" />
                  </div>
                  <div className="pb-4">
                    <span className="text-green-700 font-bold text-sm">{item.year}</span>
                    <p className="text-gray-600 text-sm mt-1">{lang === 'id' ? item.id : item.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img src="/images/rusun.jpg" alt="Rusun" className="rounded-xl shadow-lg w-full h-80 object-cover"
            onError={(e) => { e.target.src = 'https://placehold.co/600x400/166534/white?text=Rusun+Technopark' }} />
        </div>
      </section>
    </div>
  );
}