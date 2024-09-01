import React, { useState } from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Projects1 from '../components/Projects1'; // Import komponen Projects1
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function Home() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      <Navbar toggleSidebar={toggleSidebar} />
      <div style={{ display: 'flex', flex: 1, overflowX: 'hidden' }}>
        <Sidebar isManualExpanded={isSidebarExpanded} />
        <div className="content-wrapper">
          <style jsx global>{`
            /* Mengatur scrollbar kustom untuk WebKit browsers (Chrome, Safari, Edge) */
            ::-webkit-scrollbar {
              width: 12px;
              height: 12px;
            }

            ::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(10px);
              border-radius: 9999px;
            }

            ::-webkit-scrollbar-thumb {
              background: #5961C7; /* Ubah warna menjadi #5961C7 */
              backdrop-filter: blur(10px);
              border-radius: 9999px;
              border: 2px solid rgba(255, 255, 255, 0.2);
            }

            ::-webkit-scrollbar-thumb:hover {
              background: #3b4691; /* Warna saat hover, lebih gelap sedikit dari #5961C7 */
            }

            ::-webkit-scrollbar-corner {
              background: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(10px);
              border-radius: 9999px;
            }

            /* Untuk Firefox */
            * {
              scrollbar-width: thin;
              scrollbar-color: #5961C7 rgba(255, 255, 255, 0.2); /* Ubah warna menjadi #5961C7 */
            }

            /* Gaya untuk mengatur keseluruhan tampilan */
            body {
              margin: 0;
              padding: 0;
              overflow-x: hidden;
            }

            /* Media query untuk layar kecil atau mode mobile */
            @media (max-width: 768px) {
              .content-wrapper {
                margin-left: 0 !important; /* Hapus margin di sebelah kiri */
                padding-top: 45px; /* Anda dapat menyesuaikan padding ini sesuai kebutuhan */
              }
            }

            /* Default layout untuk desktop */
            .content-wrapper {
              flex: 1;
              margin-left: 58px;
              padding-top: 45px;
              overflow-x: hidden;
            }
          `}</style>
          <Header />
          <Projects1 /> {/* Tambahkan Projects1 di sini */}
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
