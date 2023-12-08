import React from 'react';
import { Document, Page } from 'react-pdf';
import { useParams } from 'react-router-dom';
import { Pdf } from '../data';
const PdfViewer = () => {
    const { id } = useParams();
    const insp = Pdf.find(p => {
        return p.name === id;
    });
    const { pdfUrl } = insp;
    const pathpdfUrl = `${process.env.PUBLIC_URL}/path-to-your-pdf-file.pdf`;


    return (
        <Document file={pdfUrl}>
        </Document>
    );
};

export default PdfViewer;
