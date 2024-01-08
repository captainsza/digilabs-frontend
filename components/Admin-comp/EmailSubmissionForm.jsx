import React, { useState } from 'react';
import axios from 'axios';

const EmailSubmissionForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = async () => {
    try {
      await axios.post('/api/submitEmail', { email });
      setEmail('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-2 text-purple-500">Email Submission</h2>
      <div className="flex items-center justify-center mb-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your email"
        />
        <button
          onClick={handleEmailSubmit}
          className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EmailSubmissionForm;