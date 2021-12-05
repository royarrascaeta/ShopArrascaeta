import React from 'react';
import "./SectionContainer.scss";

const SectionContainer = ({children}) => {
  return (
    <div className="section-container">
      {children}
    </div>
  )
}

export default SectionContainer
