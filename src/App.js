import React from 'react';
import { Route } from 'react-router-dom';
import './style.css';
import Footer from './Components/Footer/Footer';
import TopNavbar from './Components/Navbar/TopNavbar';
import SideBar from './Components/Navbar/SideBar';





import Dashbord from './Pages/dashbord/Dashbord';
import UsePages from './Pages/use-pages/UsePages';
import Charts from './Pages/charts/Charts';
import FormElement from './Pages/form-element/FormElement';
import Icons from './Pages/icons/Icons';
import Document from './Pages/document/Document';
import Tables from './Pages/tables/Tables';
import UiElement from './Pages/ui-element/UiElement';

export default function App() {
  return (
    <div className="container-scroller">
      <SideBar />
      <div className="container-fluid page-body-wrapper">
        <TopNavbar />
        <main className="main-panel">
          <div className="content-wrapper">
            <Route path="/dashbord">
              <Dashbord />
            </Route>
            <Route path="/use-pages">
              <UsePages />
            </Route>
            <Route path="/ui-elements">
              <UiElement />
            </Route>
            <Route path="/pages/charts">
              <Charts />
            </Route>
            <Route path="/pages/Form-element">
              <FormElement />
            </Route>
            <Route path="/pages/icons">
              <Icons />
            </Route>
            <Route path="/pages/document">
              <Document />
            </Route>
            <Route path="/pages/tables">
              <Tables />
            </Route>
          </div>

          
         
          <Footer />
        </main>
      </div>
    </div>
  );
}
