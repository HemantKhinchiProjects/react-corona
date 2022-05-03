import React, { useState } from 'react';
import CardStyle from '../ui/CardStyle.js';
import Data from './data';
import Projectitem from './Projectitem';
import './openproject.css';
const OpenProjects = () => {
  const [projectData] = useState(Data);
  return (
    <div class="col-md-8 grid-margin stretch-card">
      <CardStyle>
        <div className="d-flex flex-row justify-content-between">
          <h4 className="card-title mb-1">Open Projects</h4>
          <p class="text-muted mb-1">Your data status</p>
        </div>
        <div className="row">
          <div className="col-12">
            <div class="preview-list">
              {projectData.map((detailsN) => {
                const { id, dec, details, img, classes } = detailsN;
                return (
                  <Projectitem
                    key={id}
                    dec={dec}
                    details={details}
                    img={img}
                    classes={classes}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </CardStyle>
    </div>
  );
};
export default OpenProjects;
