import React from 'react';
import PDFViewer from '../pdf/pdfViewer';

function Cv() {
  const pdfUrl = './img/EL_AMRANI_Hassan_CV.pdf';

  return (
    <div className="App">
        
      <PDFViewer />
      
    </div>
  );
}

export default Cv;
