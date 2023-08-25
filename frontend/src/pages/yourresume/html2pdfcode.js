import React from 'react';
import html2pdf from 'html2pdf.js';

const PDFGenerator = () => {
  const generatePDF = async () => {
    const content = document.getElementById('contentToConvert'); // Change this to the ID of the content you want to convert
    const pdfOptions = {
      margin: 10,
      filename: 'webpage.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    try {
      const pdf = await html2pdf().from(content).set(pdfOptions).outputPdf();
      const blob = new Blob([pdf], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
      <div id="contentToConvert">
        {/* Content to be converted to PDF */}
      </div>
    </div>
  );
};

export default PDFGenerator;
