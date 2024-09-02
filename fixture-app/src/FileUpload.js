import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import axios from 'axios';

function FileUpload() {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    Papa.parse(file, {
      complete: (results) => {
        axios.post('/api/upload', results.data)
          .then(response => console.log(response))
          .catch(error => console.error(error));
      }
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={{ border: '1px dashed black', padding: '20px' }}>
      <input {...getInputProps()} />
      <p>Drag and Drop a File in CSV</p>
    </div>
  );
}

export default FileUpload;