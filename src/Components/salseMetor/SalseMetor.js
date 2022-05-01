import React from 'react';
import CardStyle from '../ui/CardStyle';
//import './salsemetor.css';
const SalseMetor = () => {
  return (
    <>
      <div className="col-sm-4 grid-margin">
        <CardStyle>
          <h5>Revenue</h5>
          <div class="row">
            <div class="col-8 col-sm-12 col-xl-8 my-auto">
              <div class="d-flex d-sm-block d-md-flex align-items-center">
                <h2 class="mb-0">$32123</h2>
                <p class="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
              </div>
              <h6 class="text-muted font-weight-normal">
                11.38% Since last month
              </h6>
            </div>
            <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
              <i class="icon-lg mdi mdi-codepen text-primary ml-auto"></i>
            </div>
          </div>
        </CardStyle>
      </div>
      <div className="col-sm-4 grid-margin">
        <CardStyle>
          <h5>Sales</h5>
          <div class="row">
            <div class="col-8 col-sm-12 col-xl-8 my-auto">
              <div class="d-flex d-sm-block d-md-flex align-items-center">
                <h2 class="mb-0">$32123</h2>
                <p class="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
              </div>
              <h6 class="text-muted font-weight-normal">
                11.38% Since last month
              </h6>
            </div>
            <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
              <i class="fa-solid fa-suitcase text-danger ml-auto icon-lg "></i>
            </div>
          </div>
        </CardStyle>
      </div>
      <div className="col-sm-4 grid-margin">
        <CardStyle>
          <h5>Purchase</h5>
          <div class="row">
            <div class="col-8 col-sm-12 col-xl-8 my-auto">
              <div class="d-flex d-sm-block d-md-flex align-items-center">
                <h2 class="mb-0">$2039</h2>
                <p class="text-danger ml-2 mb-0 font-weight-medium">-2.1% </p>
              </div>
              <h6 class="text-muted font-weight-normal">
                2.27% Since last month
              </h6>
            </div>
            <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
              <i class="fa-solid fa-computer icon-lg  ml-auto  ml-auto"></i>
            </div>
          </div>
        </CardStyle>
      </div>
    </>
  );
};
export default SalseMetor;
