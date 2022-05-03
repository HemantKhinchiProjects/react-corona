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
                const { id, dec, details } = detailsN;
                return <Projectitem key={id} dec={dec} details={details} />;
              })}

              <div class="preview-item border-bottom">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-success">
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                  </div>
                </div>
                <div class="preview-item-content d-sm-flex flex-grow">
                  <div class="flex-grow">
                    <h6 class="preview-subject">Wordpress Development</h6>
                    <p class="text-muted mb-0">Upload new design</p>
                  </div>
                  <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                    <p class="text-muted">1 hour ago</p>
                    <p class="text-muted mb-0">23 tasks, 5 issues </p>
                  </div>
                </div>
              </div>
              <div class="preview-item border-bottom">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-info">
                    <i class="fa-solid fa-clock"></i>
                  </div>
                </div>
                <div class="preview-item-content d-sm-flex flex-grow">
                  <div class="flex-grow">
                    <h6 class="preview-subject">Project meeting</h6>
                    <p class="text-muted mb-0">New project discussion</p>
                  </div>
                  <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                    <p class="text-muted">35 minutes ago</p>
                    <p class="text-muted mb-0">15 tasks, 2 issues</p>
                  </div>
                </div>
              </div>
              <div class="preview-item border-bottom">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-danger">
                    <i class="fa-solid fa-envelope-open-text"></i>
                  </div>
                </div>
                <div class="preview-item-content d-sm-flex flex-grow">
                  <div class="flex-grow">
                    <h6 class="preview-subject">Broadcast Mail</h6>
                    <p class="text-muted mb-0">Sent release details to team</p>
                  </div>
                  <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                    <p class="text-muted">55 minutes ago</p>
                    <p class="text-muted mb-0">35 tasks, 7 issues </p>
                  </div>
                </div>
              </div>
              <div class="preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-warning">
                    <i class="fa-brands fa-uikit"></i>
                  </div>
                </div>
                <div class="preview-item-content d-sm-flex flex-grow">
                  <div class="flex-grow">
                    <h6 class="preview-subject">UI Design</h6>
                    <p class="text-muted mb-0">New application planning</p>
                  </div>
                  <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                    <p class="text-muted">50 minutes ago</p>
                    <p class="text-muted mb-0">27 tasks, 4 issues </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardStyle>
    </div>
  );
};
export default OpenProjects;
