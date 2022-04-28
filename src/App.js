import React from 'react';
import './style.css';
import Footer from './Components/Footer/Footer';
import TopNavbar from './Components/Navbar/TopNavbar';
export default function App() {
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper">
        <TopNavbar />
        <main className="main-panel">
          <div className="content-wrapper"></div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
