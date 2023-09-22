import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

function PDFViewer() {
  const pdfUrl = '/EL_AMRANI_Hassan_CV.pdf'; // Replace with the actual path to your PDF file
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  return (
    <div style={{ width: '100%' , marginLeft: '2%', marginRight: 'auto' , height: '1000px', overflow: 'hidden'}}>
      <Document file={pdfUrl} >
        <Page pageNumber={1} 
          width={'720'}
          height={'100px'}
        /> {/* You can specify the page number to display */}
      </Document>
    </div>
  );
}

export default PDFViewer;
