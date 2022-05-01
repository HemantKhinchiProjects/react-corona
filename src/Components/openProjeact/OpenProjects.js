import React from 'react';
import CardStyle from '../ui/CardStyle.js';
import './openproject.css';
const OpenProjects = () => {
  return (
    <div class="col-md-8 grid-margin stretch-card">
      <CardStyle>
        <div className="d-flex flex-row justify-content-between">
          <h4 className="card-title mb-1">Open Projects</h4>
        </div>
      </CardStyle>
    </div>
  );
};
export default OpenProjects;
