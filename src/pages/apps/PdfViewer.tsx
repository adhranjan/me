import React from 'react';

const PdfViewer = ({ url }) => {
  return <div style={{ height: '100vh' }}>
      <iframe
        src={url}
        width="100%"
        height="100%"
        title="PDF Viewer"
        // frameBorder="0"
      />
    </div>
};

export default PdfViewer;
