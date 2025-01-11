import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
function App() {
  
  return (
    <div className='w-screen rounded-sm'>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer fileUrl="src/document/carta.pdf" />;
      </Worker>
    </div>
  )
}

export default App
