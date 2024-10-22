// Personality.js
import React, { useState } from 'react';

const Personality = () => {
  const [modelName, setModelName] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [draggedFiles, setDraggedFiles] = useState([]);

  const handleFileDrop = (files) => {
    setDraggedFiles([...draggedFiles, ...files]);
  };

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      <h1 className="text-3xl mb-4">Personalidade e Empatia do Modelo</h1>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
        <label className="block text-lg mb-2">Nome do Modelo:</label>
        <input
          type="text"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
        <label className="block text-lg mb-2">Avatar do Modelo:</label>
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} className="input w-full" />
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
        <h2 className="text-xl mb-2">Drag and Drop de Documentos, Links e Fotos</h2>
        <div
          className="border-dashed border-2 p-6 text-center cursor-pointer"
          onDrop={(e) => handleFileDrop(e.dataTransfer.files)}
        >
          Arraste e solte aqui
        </div>
        <ul className="mt-4">
          {draggedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>

      {/* Speech to Speech e Uploads de Voz */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl mb-2">Gravação e Upload de Voz</h2>
        {/* Integrações de gravação e upload */}
      </div>
    </div>
  );
};

export default Personality;
