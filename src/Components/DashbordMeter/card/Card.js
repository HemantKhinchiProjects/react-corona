import React from 'react';
import Classes from './Card.module.css';
const Card = (props) => {
  return (
    <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-9">
              <div class="d-flex align-items-center align-self-start">
                <h3 class="mb-0">${props.amount}</h3>
                <p class="text-success ml-2 mb-0 font-weight-medium">
                  +{props.groth}%
                </p>
              </div>
            </div>
            <div class="col-3">
              <div class="icon icon-box-success ">
                <span class="mdi mdi-arrow-top-right icon-item">
                  <i class="fa-solid fa-arrow-trend-up"></i>
                </span>
              </div>
            </div>
          </div>
          <h6 class="text-muted font-weight-normal">{props.dec}</h6>
        </div>
      </div>
    </div>
  );
};
export default Card;
