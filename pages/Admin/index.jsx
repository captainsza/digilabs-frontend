import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ButtonTextForm from '@/components/Admin-comp/ButtonTextForm';
import EmailSubmissionForm from '@/components/Admin-comp/EmailSubmissionForm';
import LogoUploadForm from '@/components/Admin-comp/LogoUploadForm';

const AdminPage = () => {
  const [buttonText, setButtonText] = useState('');

  const handleButtonTextUpdate = (newText) => {
    setButtonText(newText);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-700 to-purple-500 text-white min-h-screen p-8 flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold mb-8"
      >
        Admin Panel
      </motion.h1>
      <ButtonTextForm onButtonTextUpdate={handleButtonTextUpdate} />
      <EmailSubmissionForm />
      <LogoUploadForm buttonText={buttonText} />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8"
      >
        <h3 className="text-2xl font-bold mb-2">Updated Button Text:</h3>
        <p className="text-lg">{buttonText}</p>
      </motion.div>
    </motion.div>
  );
};

export default AdminPage;