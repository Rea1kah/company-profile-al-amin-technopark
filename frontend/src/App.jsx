import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserProtectedRoute from './components/UserProtectedRoute';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import TentangKami from './pages/TentangKami';
import PetaKawasan from './pages/PetaKawasan';
import Fasilitas from './pages/Fasilitas';
import Berita from './pages/Berita';
import BeritaDetail from './pages/BeritaDetail';
import Kontak from './pages/Kontak';
import Jelajahi360 from './pages/Jelajahi360';
import AreaParkir from './pages/areas/AreaParkir';
import AreaPertanian from './pages/areas/AreaPertanian';
import AreaPlaza from './pages/areas/AreaPlaza';
import AreaSportCentre from './pages/areas/AreaSportCentre';
import AreaStableKuda from './pages/areas/AreaStableKuda';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBerita from './pages/admin/AdminBerita';
import AdminFasilitas from './pages/admin/AdminFasilitas';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}

function GatedLayout({ children }) {
  return (
    <UserProtectedRoute>
      <Layout>{children}</Layout>
    </UserProtectedRoute>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* Public routes — tanpa login */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* User gated routes — harus login */}
        <Route path="/" element={<GatedLayout><Home /></GatedLayout>} />
        <Route path="/tentang-kami" element={<GatedLayout><TentangKami /></GatedLayout>} />
        <Route path="/peta-kawasan" element={<GatedLayout><PetaKawasan /></GatedLayout>} />
        <Route path="/fasilitas" element={<GatedLayout><Fasilitas /></GatedLayout>} />
        <Route path="/berita" element={<GatedLayout><Berita /></GatedLayout>} />
        <Route path="/berita/:slug" element={<GatedLayout><BeritaDetail /></GatedLayout>} />
        <Route path="/kontak" element={<GatedLayout><Kontak /></GatedLayout>} />
        <Route path="/jelajahi-360" element={<GatedLayout><Jelajahi360 /></GatedLayout>} />
        <Route path="/area/parkir-prosessing" element={<GatedLayout><AreaParkir /></GatedLayout>} />
        <Route path="/area/pertanian-agrotechnopark" element={<GatedLayout><AreaPertanian /></GatedLayout>} />
        <Route path="/area/plaza-utama" element={<GatedLayout><AreaPlaza /></GatedLayout>} />
        <Route path="/area/sport-centre-rusun" element={<GatedLayout><AreaSportCentre /></GatedLayout>} />
        <Route path="/area/stable-kuda-grazing" element={<GatedLayout><AreaStableKuda /></GatedLayout>} />

        {/* Admin routes */}
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/berita" element={<ProtectedRoute><AdminBerita /></ProtectedRoute>} />
        <Route path="/admin/fasilitas" element={<ProtectedRoute><AdminFasilitas /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}