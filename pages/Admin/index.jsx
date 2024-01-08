import React, { useState } from 'react';
import ButtonTextForm from '@/components/Admin-comp/ButtonTextForm';
import EmailSubmissionForm from '@/components/Admin-comp/EmailSubmissionForm';
import LogoUploadForm from '@/components/Admin-comp/LogoUploadForm';

const AdminPage = () => {
  const [buttonText, setButtonText] = useState('');

  const handleButtonTextUpdate = (newText) => {
    setButtonText(newText);
  };

  return (
    <div className="bg-black text-white min-h-screen p-8 items-center text-center">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
      <ButtonTextForm onButtonTextUpdate={handleButtonTextUpdate} />
      <EmailSubmissionForm />
      <LogoUploadForm buttonText={buttonText} />
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-2">Updated Button Text:</h3>
        <p className="text-lg">{buttonText}</p>
      </div>
    </div>
  );
};

export default AdminPage;