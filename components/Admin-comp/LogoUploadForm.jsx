import React, { useState } from 'react';
import axios from 'axios';

const LogoUploadForm = ({ buttonText }) => {
  const [logoFile, setLogoFile] = useState(null);

  const handleLogoUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', logoFile);

      await axios.post('/api/uploadLogo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setLogoFile(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-purple-500">Logo Upload</h2>
      <input
        type="file"
        accept="image/*"
        className="mb-2"
        onChange={(e) => setLogoFile(e.target.files[0])}
      />
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogoUpload}
      >
        {buttonText || 'Upload'}
      </button>
    </div>
  );
};

export default LogoUploadForm;
