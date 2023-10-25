import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const PdfExporter = () => {
  const contentRef = useRef(null);

  const handleExportPdf = () => {
    const element = contentRef.current;

    const opt = {
      margin: 10,
      filename: "exported_pdf.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div>
      <div ref={contentRef}>
        {/* Đây là nội dung HTML bạn muốn xuất vào PDF */}
        aaaaaaaaaaaaaaaaa
      </div>
      <button onClick={handleExportPdf}>Xuất PDF</button>
    </div>
  );
};

export default PdfExporter;
