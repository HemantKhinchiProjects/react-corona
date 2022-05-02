import React from 'react';
import { Route } from 'react-router-dom';
import './style.css';
import Footer from './Components/Footer/Footer';
import TopNavbar from './Components/Navbar/TopNavbar';
import SideBar from './Components/Navbar/SideBar';
import DashBordMeters from './Components/DashbordMeter/DashbordMeters';
import TransactionHistory from './Components/transactionHistory/TransactionHistory';
import OpenProjects from './Components/openProjeact/OpenProjects';
import SalseMetor from './Components/salseMetor/SalseMetor';

import Dashbord from './Pages/dashbord/Dashbord';
import UsePages from './Pages/use-pages/UsePages';
import Document from './Pages/use-pages/Document';
import Charts from './Pages/dashbord/Charts';
import FormElement from './Pages/dashbord/FormElement';
import Icons from './Pages/dashbord/Icons';

export default function App() {
  return (
    <div className="container-scroller">
      <SideBar />
      <div className="container-fluid page-body-wrapper">
        <TopNavbar />
        <main className="main-panel">
          <Route path="/dashbord">
            <Dashbord />
          </Route>
          <Route path="/use-pages">
            <UsePages />
          </Route>
          <Route path="/pages/charts">
            <Charts />
          </Route>
          <Route path="/pages/Form-element">
            <Form-element />
          </Route>
          <Route path="/pages/icons">
            <Icons />
          </Route>
          <Route path="/pages/icons">
            <Document />
          </Route>
          <div className="content-wrapper">
            <DashBordMeters />
            <div className="row">
              <TransactionHistory />
              <OpenProjects />
            </div>
            <div className="row">
              <SalseMetor />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
