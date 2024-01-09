import React, { useState } from 'react';
import axios from 'axios';

const ButtonTextForm = ({ onButtonTextUpdate }) => {
  const [newText, setNewText] = useState('');

  const handleTextUpdate = async () => {
    try {
      const response = await axios.put('/api/buttonText', { buttonText: newText });
      onButtonTextUpdate(response.data.buttonText);
      setNewText('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center mb-8">
  <h2 className="text-2xl font-bold mb-4 text-purple-500">Update Button Text</h2>
  <input
    type="text"
    value={newText}
    onChange={(e) => setNewText(e.target.value)}
    className="px-4 py-2 rounded border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
  <button
    onClick={handleTextUpdate}
    className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mt-2"
  >
    Update
  </button>
</div>
  );
};

export default ButtonTextForm;