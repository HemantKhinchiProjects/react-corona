import React from 'react';
const projectitem = (props) => {
  return (
    <div class="preview-item border-bottom">
      <div class="preview-thumbnail">
        <div class={`preview-icon bg-${props.classes}`}>
          <i class={`fa-solid fa-${props.img}`}></i>
        </div>
      </div>
      <div class="preview-item-content d-sm-flex flex-grow">
        <div class="flex-grow">
          <h6 class="preview-subject">{props.dec}</h6>
          <p class="text-muted mb-0">{props.details}</p>
        </div>
        <div class="mr-auto text-sm-right pt-2 pt-sm-0">
          <p class="text-muted">1 hour ago</p>
          <p class="text-muted mb-0">23 tasks, 5 issues </p>
        </div>
      </div>
    </div>
  );
};
export default projectitem;
