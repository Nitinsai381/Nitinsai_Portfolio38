// import React from "react";
// import { Document, Page } from "react-pdf";
// import NSpdf from "../../src/Assets/NitinSai_CV.pdf"
// export function Resume(){

//     return <div>
// <Document file={NSpdf}>
//     <Page  pageNumber={1} />
// </Document>
//     </div>
// }



// import React from 'react';
// import { Document, Page } from 'react-pdf';
// import pdfUrl from "../Assets/NitinSai_CV.pdf";
// function Resume() {
// //   const pdfUrl = 'src\Assets\NitinSai_CV.pdf';

//   return (
//     <div>
//       <h1>PDF Viewer</h1>
//       <Document
//         file={pdfUrl}
//         onLoadSuccess={({ numPages }) => console.log(`Number of pages: ${numPages}`)}>
      
//         <Page pageNumber={1} />
//       </Document>
//     </div>
//   );
// }

// export default Resume;


import React, { useState, useEffect } from "react";
import { Container, Row,Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import pdf from "../Assets/NitinSai_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
 
  return (
    <div>
      <Container fluid className="resume-section">
        {/* <Particle /> */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button className="buttonR"
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
        <Col>
          <Document file={pdf} className="d-flex justify-content-center">
          
         <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false}/>
          </Document>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button className="buttonR"
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
