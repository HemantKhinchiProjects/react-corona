import React from 'react';
import './style.css';
import Footer from './Components/Footer/Footer';
import TopNavbar from './Components/Navbar/TopNavbar';
import SideBar from './Components/Navbar/SideBar';
import DashBordMeters from './Components/DashbordMeter/DashbordMeters';
export default function App() {
  return (
    <div className="container-scroller">
      <SideBar />
      <div className="container-fluid page-body-wrapper">
        <TopNavbar />
        <main className="main-panel">
          <div className="content-wrapper">
            <DashBordMeters />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
